import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  const preview = page.getByTestId('markdown-preview')

  await expect(preview).toContainText('index.html')
  await expect(preview).toContainText('codeUtility.ts')

  const textarea = page.getByPlaceholder('Markdown')

  await textarea.fill(`
    \`\`\`js:index.js
    console.log('Hello World')
    \`\`\`
  `)

  await expect(page.getByTestId('markdown-preview')).toContainText('index.js')
})
