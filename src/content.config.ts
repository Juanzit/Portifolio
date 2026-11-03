import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Schemas oficiais das Content Collections (Astro 7 Content Layer API + Zod 4).
 * Regra de Veracidade Estrita (AGENTS.md):
 * - Dados factuais, métricas científicas ou identificadores (ISSN, DOI, links)
 *   devem declarar `verificacaoStatus: 'verificado' | 'a-confirmar'`.
 * - Na pesquisa de bioacústica, utilizar sempre "Cenário A (Controle)" e "Cenário B (Proposto)".
 */
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['pesquisa-ia', 'mobile', 'game-systems', 'web-engineering']),
    status: z.enum(['em-producao', 'em-desenvolvimento', 'publicacao-cientifica']),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative(),
    verificacaoStatus: z.enum(['verificado', 'a-confirmar']).default('a-confirmar'),
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    verificacaoStatus: z.enum(['verificado', 'a-confirmar']).default('a-confirmar'),
  }),
});

export const collections = {
  projetos,
  journal,
};
