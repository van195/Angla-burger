import images from '../containers/container'

export function getClosestImage(images, heroPoint) {
    let closest = null;
    let minDistance = Infinity;

    images.forEach((img) => {
        const rect = img.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const distance = Math.hypot(
            x - heroPoint.x,
            y - heroPoint.y
        );

        if (distance < minDistance) {
            minDistance = distance;
            closest = img;
        }
    });

    return closest;
}

    export const cardsContent = [
        {
            id:1,
            images:images.TheBestHamburgerRecipe,
            title:'Flame-Grilled Perfection',
            paragraph:'Every burger is grilled over real flames, creating the smoky flavor that keeps customers coming back.'
    },
        {
            id:2,
            images:images.fresh,
            title:'Fresh Every Morning',
            paragraph:'Fresh vegetables, premium meats, and soft bakery buns prepared daily for unbeatable quality.'
    },
        {
            id:3,
            images:images.Fastdelivery,
            title:'Fast & Reliable',
            paragraph:'From our kitchen to your table in record time without sacrificing freshness.'
    },
        {
            id:4,
            images:images.Thebestburgeronlyforyou,
            title:'Crafted With Passion',
            paragraph:'Every layer is carefully stacked to deliver the perfect bite, every single time.'
    }
    ]
    export const footerItem = [
        {
            id:1,
            title:'About Us',
            list1:'Careers',
            list2:'Investor Relations',
            list3:'Locations',
            list4:'Press',
            list5:'Angla app',
    },
        {
            id:2,
            title:'Social Media',
            list1:'Instagram',
            list2:'Twitter',
            list3:'TikTok',
            list3:'youtube',
            list4:'Facebook',
    },
        {
            id:3,
            title:'Legal',
            list1:'Privacy Policy',
            list2:'Terms of Use',
            list3:'Your Privacy Choices',
            list3:'Accessibility Statement',
            list4:'Consumer Health Data Notice',
    },
      
       
    ]