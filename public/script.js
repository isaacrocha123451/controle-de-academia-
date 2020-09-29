const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for(item of menuItems){
    if(currentPage.includes(item.getAttribute('href'))){
        item.classList.add('active')
    }

}

/* paginação */

function paginate(totalPage, selectPage){
    let 
    pages = [],
    oldPage

for( let currentPage = 1 ; currentPage <= totalPage ; currentPage ++){
    const firtsAndLastPage = currentPage == 1 || currentPage == totalPage
    const pagesAfterSelectedPage = currentPage <= selectPage + 2
    const pagesBeforeSelectedPage = currentPage >= selectPage - 2 

    if(firtsAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage){
        if(oldPage && currentPage - oldPage > 2){
            pages.push("...")
            console.log(currentPage)
            console.log(oldPage)


        }
        if(oldPage && currentPage - oldPage == 2){
            pages.push(currentPage - 1 )
            console.log(currentPage)
            console.log(oldPage)
            
        }



        pages.push(currentPage)
        oldPage = currentPage

        console.log(currentPage)
        console.log(oldPage)
        
        


        }
    

    }
    return pages
}

function createPagination(pagination){
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const filter = pagination.dataset.filter
    const pages = paginate(total, page)

    let elements = ""

    for(let page of pages){
        if(String(page).includes("...")){
            elements += `<span>${page}</span>`
        }else{
            elements += `<a href="?filter=${filter}&page=${page}">${page}</a>`
    }

}

pagination.innerHTML = elements
}

const pagination = document.querySelector(".pagination")

if(pagination){
    createPagination(pagination)
}


