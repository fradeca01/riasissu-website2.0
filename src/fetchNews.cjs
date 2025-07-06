// scripts/fetchNews.js
const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')


const sanity = createClient({
  projectId: 'bmas5bva', // replace this
  dataset: 'production',
  apiVersion: '2024-07-06',
  useCdn: false,
})

const OUTPUT_DIR = path.resolve('src/content/news')


async function fetchAndWriteNews() {
  const articles = await sanity.fetch(`*[_type == "news"]{
  _id,
  title,
  description,
  publishedAt,
  image,
  tag,
  body
}`)

    console.log(articles)

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }
  
  for (const article of articles) {
    const filePath = path.join(OUTPUT_DIR, `${article.title}.md`)
    
    const content = {
      author: "a",
      title: article.title,
      pubDate: article.publishedAt,
      description: article.description,
      // image: article.image ? article.image : "",
      tags: article.tag || [],
    }
    
    // Convert Sanity block content to plain text
    const bodyText = (article.body || [])
      .filter(block => block._type === 'block')
      .map(block => block.children.map(child => child.text).join(''))
      .join('\n\n')

    console.log(content)

    const fileContents = matter.stringify(bodyText, content)

    fs.writeFileSync(filePath, fileContents)
    console.log(`✅ Wrote: ${filePath}`)
  }
}

fetchAndWriteNews().catch(console.error)
