/**
 * Runtime Modular de Movimento & HUD Interativo — NEO-MANGA / ARCADE
 *
 * Responsabilidades:
 * 1. IntersectionObserver compartilhado para revelação de elementos e staggers.
 * 2. Animações sincronizadas ao scroll (rAF único e observação fora de tela).
 * 3. PerspectiveCard tilt (máx. 8deg) com retorno suave, desativado em touch e reduced-motion.
 * 4. MagneticButton e microinterações de arcade.
 * 5. ThemeSwitcher integrado ao HUD (`data-theme="dark"` / `data-theme="light"`).
 */

interface TrackedScrollElement {
  el: HTMLElement;
  kind: 'parallax' | 'story' | 'transition';
  amplitude: number;
}

class NeoMangaMotionRuntime {
  private reducedMotionQuery: MediaQueryList;
  private finePointerQuery: MediaQueryList;
  private viewportObservers = new Map<string, IntersectionObserver>();
  private activeScrollObserver: IntersectionObserver | null = null;
  private activeScrollElements = new Set<TrackedScrollElement>();
  private allScrollElements = new Map<HTMLElement, TrackedScrollElement>();
  private rafId: number | null = null;
  private isDestroyed = false;

  constructor() {
    this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  }

  public init(): void {
    this.setupThemeToggle();

    if (this.reducedMotionQuery.matches) {
      this.revealAllImmediately();
      document.documentElement.classList.remove('js-motion');
    } else {
      document.documentElement.classList.add('js-motion');
      this.setupViewportAnimations();
      this.setupStaggerContainers();
      this.setupScrollDrivenAnimations();
      this.setupHeaderScrollState();
      if (this.finePointerQuery.matches) {
        this.setupMagneticButtons();
        this.setupPerspectiveCards();
      }
    }

    this.reducedMotionQuery.addEventListener('change', (e) => {
      if (e.matches) {
        this.revealAllImmediately();
        document.documentElement.classList.remove('js-motion');
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
      } else {
        document.documentElement.classList.add('js-motion');
        this.setupViewportAnimations();
        this.setupStaggerContainers();
        this.setupScrollDrivenAnimations();
      }
    });

    window.addEventListener('hashchange', () => this.handleAnchorJump(), { passive: true });
    window.addEventListener('pageshow', () => this.syncVisibleViewportElements(), { passive: true });

    document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((anchor) => {
      anchor.addEventListener('click', () => {
        requestAnimationFrame(() => this.handleAnchorJump());
        setTimeout(() => this.syncVisibleViewportElements(), 320);
      });
    });
  }

  private setupThemeToggle(): void {
    const toggleBtns = document.querySelectorAll<HTMLElement>('[data-theme-toggle]');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        try {
          localStorage.setItem('juan-theme', nextTheme);
        } catch (_) {}

        document.querySelectorAll<HTMLElement>('[data-theme-label]').forEach((label) => {
          label.textContent = nextTheme === 'dark' ? 'NEO-DARK' : 'CYBER-LIGHT';
        });
      });
    });
  }

  private revealAllImmediately(): void {
    document
      .querySelectorAll<HTMLElement>('[data-motion], [data-stagger-item], [data-reveal-text]')
      .forEach((el) => {
        el.setAttribute('data-motion-state', 'visible');
        el.style.willChange = 'auto';
      });
    document.querySelectorAll<HTMLElement>('[data-stagger-container]').forEach((el) => {
      el.setAttribute('data-stagger-state', 'visible');
    });
  }

  private getViewportObserver(threshold: number, rootMargin: string): IntersectionObserver {
    const key = `${threshold}|${rootMargin}`;
    let obs = this.viewportObservers.get(key);
    if (!obs) {
      obs = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            const target = entry.target as HTMLElement;
            const once = target.dataset.motionOnce !== 'false';

            if (entry.isIntersecting) {
              this.triggerElementReveal(target);
              if (once) observer.unobserve(target);
            } else if (!once && target.getAttribute('data-motion-state') === 'visible') {
              if (entry.intersectionRatio === 0) {
                target.setAttribute('data-motion-state', 'hidden');
              }
            }
          }
        },
        { threshold, rootMargin }
      );
      this.viewportObservers.set(key, obs);
    }
    return obs;
  }

  private triggerElementReveal(el: HTMLElement): void {
    if (el.getAttribute('data-motion-state') === 'visible') return;
    el.style.willChange = 'transform, opacity';
    el.setAttribute('data-motion-state', 'visible');

    const cleanup = (event: TransitionEvent) => {
      if (event.target === el) {
        el.style.willChange = 'auto';
        el.removeEventListener('transitionend', cleanup);
      }
    };
    el.addEventListener('transitionend', cleanup);
  }

  private setupViewportAnimations(): void {
    const elements = document.querySelectorAll<HTMLElement>(
      '[data-motion]:not([data-stagger-item]), [data-reveal-text]'
    );
    const viewportH = window.innerHeight;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.94 && rect.bottom > 0) {
        requestAnimationFrame(() => this.triggerElementReveal(el));
        if (el.dataset.motionOnce !== 'false') return;
      } else if (rect.bottom <= 0) {
        this.triggerElementReveal(el);
        if (el.dataset.motionOnce !== 'false') return;
      }

      const threshold = Number(el.dataset.motionThreshold ?? '0.12');
      const rootMargin = el.dataset.motionMargin ?? '0px 0px -8% 0px';
      this.getViewportObserver(threshold, rootMargin).observe(el);
    });
  }

  private setupStaggerContainers(): void {
    const containers = document.querySelectorAll<HTMLElement>('[data-stagger-container]');
    const viewportH = window.innerHeight;

    containers.forEach((container) => {
      const staggerMs = Number(container.dataset.staggerInterval ?? '75');
      const baseDelayMs = Number(container.dataset.staggerDelay ?? '0');
      const once = container.dataset.staggerOnce !== 'false';
      const threshold = Number(container.dataset.staggerThreshold ?? '0.12');
      const rootMargin = container.dataset.staggerMargin ?? '0px 0px -6% 0px';

      const items = Array.from(container.querySelectorAll<HTMLElement>('[data-stagger-item]')).filter(
        (item) => item.closest('[data-stagger-container]') === container
      );

      items.forEach((item, index) => {
        const explicitIndex = item.dataset.staggerIndex ? Number(item.dataset.staggerIndex) : index;
        const computedDelay = baseDelayMs + explicitIndex * staggerMs;
        item.style.setProperty('--motion-delay', `${computedDelay}ms`);
      });

      const revealGroup = () => {
        container.setAttribute('data-stagger-state', 'visible');
        items.forEach((item) => this.triggerElementReveal(item));
      };

      const rect = container.getBoundingClientRect();
      if (rect.top < viewportH * 0.94 && rect.bottom > 0) {
        requestAnimationFrame(revealGroup);
        if (once) return;
      } else if (rect.bottom <= 0) {
        revealGroup();
        if (once) return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              revealGroup();
              if (once) obs.unobserve(container);
            } else if (!once && entry.intersectionRatio === 0) {
              container.setAttribute('data-stagger-state', 'hidden');
              items.forEach((item) => item.setAttribute('data-motion-state', 'hidden'));
            }
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(container);
    });
  }

  private setupScrollDrivenAnimations(): void {
    const parallaxNodes = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const storyNodes = document.querySelectorAll<HTMLElement>('[data-sticky-story]');
    const transitionNodes = document.querySelectorAll<HTMLElement>('[data-section-transition]');

    const registerNode = (
      el: HTMLElement,
      kind: TrackedScrollElement['kind'],
      amplitude = 18
    ) => {
      if (this.allScrollElements.has(el)) return;
      this.allScrollElements.set(el, { el, kind, amplitude });
    };

    parallaxNodes.forEach((el) => {
      const amp = Number(el.dataset.parallaxAmplitude ?? '18');
      registerNode(el, 'parallax', amp);
    });

    storyNodes.forEach((el) => registerNode(el, 'story', 1));
    transitionNodes.forEach((el) => registerNode(el, 'transition', 1));

    this.activeScrollObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const item = this.allScrollElements.get(entry.target as HTMLElement);
          if (!item) continue;
          if (entry.isIntersecting) {
            this.activeScrollElements.add(item);
            this.scheduleScrollTick();
          } else {
            this.activeScrollElements.delete(item);
          }
        }
      },
      { rootMargin: '240px 0px 240px 0px', threshold: 0 }
    );

    this.allScrollElements.forEach((item) => {
      this.activeScrollObserver?.observe(item.el);
    });

    const progressFallbackEl = document.querySelector<HTMLElement>('[data-scroll-progress-bar]');
    const supportsCssScrollTimeline =
      typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: scroll()');

    const onScrollOrResize = () => {
      if (progressFallbackEl && !supportsCssScrollTimeline) {
        const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
        progressFallbackEl.style.transform = `scaleX(${progress.toFixed(4)})`;
      }
      this.scheduleScrollTick();
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    onScrollOrResize();
  }

  private scheduleScrollTick(): void {
    if (this.rafId !== null || this.isDestroyed || this.reducedMotionQuery.matches) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.updateScrollElements();
    });
  }

  private updateScrollElements(): void {
    const vh = window.innerHeight || 1;
    const mobileFactor = window.innerWidth < 768 ? 0.5 : 1;

    for (const item of this.activeScrollElements) {
      const rect = item.el.getBoundingClientRect();
      const totalTravel = vh + rect.height;
      const rawProgress = totalTravel > 0 ? (vh - rect.top) / totalTravel : 0.5;
      const progress = Math.min(1, Math.max(0, rawProgress));

      if (item.kind === 'parallax') {
        const centered = (0.5 - progress) * 2;
        const offsetPx = centered * item.amplitude * mobileFactor;
        item.el.style.setProperty('--parallax-y', `${offsetPx.toFixed(2)}px`);
      } else if (item.kind === 'story') {
        const storySpan = Math.max(1, rect.height - vh * 0.35);
        const storyRaw = (vh * 0.55 - rect.top) / storySpan;
        const storyProgress = Math.min(1, Math.max(0, storyRaw));
        item.el.style.setProperty('--story-progress', storyProgress.toFixed(3));

        const steps = item.el.querySelectorAll<HTMLElement>('[data-story-step]');
        steps.forEach((step, idx) => {
          const stepRect = step.getBoundingClientRect();
          const isReached = stepRect.top <= vh * 0.7;
          const isCurrent = stepRect.top <= vh * 0.7 && stepRect.bottom >= vh * 0.28;
          step.setAttribute('data-step-active', isCurrent ? 'true' : isReached ? 'passed' : 'false');
          if (isCurrent) {
            item.el.setAttribute('data-active-step-index', String(idx + 1));
          }
        });
      } else if (item.kind === 'transition') {
        const entryProgress = Math.min(1, Math.max(0, (vh * 0.94 - rect.top) / (vh * 0.45)));
        item.el.style.setProperty('--section-progress', entryProgress.toFixed(3));
      }
    }
  }

  private setupHeaderScrollState(): void {
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    if (!header) return;

    let lastState = false;
    const checkHeader = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastState) {
        lastState = scrolled;
        header.setAttribute('data-header-scrolled', scrolled ? 'true' : 'false');
      }
    };

    window.addEventListener('scroll', checkHeader, { passive: true });
    checkHeader();
  }

  private setupMagneticButtons(): void {
    const buttons = document.querySelectorAll<HTMLElement>('[data-magnetic]');

    buttons.forEach((btn) => {
      const strength = Number(btn.dataset.magneticStrength ?? '4');
      let frame: number | null = null;

      btn.addEventListener('pointermove', (e: PointerEvent) => {
        if (e.pointerType !== 'mouse' || this.reducedMotionQuery.matches) return;
        const rect = btn.getBoundingClientRect();
        const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        const moveX = Math.max(-strength, Math.min(strength, relX * strength));
        const moveY = Math.max(-strength, Math.min(strength, relY * strength));

        if (frame !== null) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          btn.style.setProperty('--magnetic-x', `${moveX.toFixed(2)}px`);
          btn.style.setProperty('--magnetic-y', `${moveY.toFixed(2)}px`);
        });
      });

      const reset = () => {
        if (frame !== null) cancelAnimationFrame(frame);
        btn.style.setProperty('--magnetic-x', '0px');
        btn.style.setProperty('--magnetic-y', '0px');
      };

      btn.addEventListener('pointerleave', reset);
      btn.addEventListener('blur', reset);
    });
  }

  private setupPerspectiveCards(): void {
    const cards = document.querySelectorAll<HTMLElement>('[data-perspective-card]');

    cards.forEach((card) => {
      const maxTilt = Number(card.dataset.maxTilt ?? '7');
      let frame: number | null = null;

      card.addEventListener('pointermove', (e: PointerEvent) => {
        if (e.pointerType !== 'mouse' || this.reducedMotionQuery.matches) return;
        const rect = card.getBoundingClientRect();
        const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        const tiltX = -relY * maxTilt;
        const tiltY = relX * maxTilt;

        if (frame !== null) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          card.style.setProperty('--card-tilt-x', `${tiltX.toFixed(2)}deg`);
          card.style.setProperty('--card-tilt-y', `${tiltY.toFixed(2)}deg`);
        });
      });

      const reset = () => {
        if (frame !== null) cancelAnimationFrame(frame);
        card.style.setProperty('--card-tilt-x', '0deg');
        card.style.setProperty('--card-tilt-y', '0deg');
      };

      card.addEventListener('pointerleave', reset);
      card.addEventListener('blur', reset);
    });
  }

  private handleAnchorJump(): void {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    target
      .querySelectorAll<HTMLElement>('[data-motion], [data-stagger-item], [data-reveal-text]')
      .forEach((el) => this.triggerElementReveal(el));
    if (target.hasAttribute('data-motion')) {
      this.triggerElementReveal(target);
    }
    this.syncVisibleViewportElements();
  }

  private syncVisibleViewportElements(): void {
    const vh = window.innerHeight;
    document
      .querySelectorAll<HTMLElement>('[data-motion], [data-stagger-item], [data-reveal-text]')
      .forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          this.triggerElementReveal(el);
        }
      });
  }
}

let runtimeInstance: NeoMangaMotionRuntime | null = null;

export function initPortfolioMotion(): void {
  if (typeof window === 'undefined' || runtimeInstance) return;
  runtimeInstance = new NeoMangaMotionRuntime();
  runtimeInstance.init();
}
