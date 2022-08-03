document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.single_article__')
    const firstH2 = container.querySelector('h2')

    if (!firstH2) {
        return
    }

    const toc = document.createElement('ul')
    toc.classList.add('single_toc__')

    const headings = container.querySelectorAll('h2')
    headings.forEach((heading, index) => {
        const anchor = document.createElement('a')
        anchor.textContent = heading.textContent

        if (heading.id) {
            anchor.href = '#' + heading.id
        } else {
            heading.id = 'toc' + index
            anchor.href = '#toc' + index
        }

        const listItem = document.createElement('li')
        listItem.append(anchor)
        toc.append(listItem)
    })

    firstH2.insertAdjacentElement('beforebegin', toc)
})