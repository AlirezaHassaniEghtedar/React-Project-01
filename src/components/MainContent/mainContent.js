import React from "react";
import styles from './mainContent.module.scss'
import globalStyles from '../../styles/variables.module.scss'

export const MainContent = () => {
    return(
        <main className={styles.main}>
            <MainBannerSection />
            <AboutUsSection />
            <NewCollectionSection />
            <DiscountSection />
            <ProductsSection />
            <CustomersReviewsSection />
            <OrderSection />
            <QouteSection />
        </main>
    )
}

const MainBannerSection = () => {
    const style = {background : "#FFF" , color : globalStyles.mainBg , padding : "10px" , borderRadius : "3px"}
    return(
        <div className={styles.mainBannerSection}>
            <h1>Phones Are Good<br /> 
            But <span style={style}>Our Phones</span> Are The <span style={style}>Best</span></h1>
            <p>
                "Phones Are Good, But Our Phones Are The Best" - this statement encapsulates our firm belief in
                the superiority of our products. In today's world, where connectivity is crucial, having a reliable
                and innovative device is essential. While recognizing the value of all phones, we take pride in
                the unmatched quality and performance of our offerings. From cutting-edge features to seamless functionality, our phones
                are meticulously designed to exceed expectations. With a focus on innovation, we invite you to experience why
                our phones stand out as the ultimate choice for your communication and technological needs.
            </p>
        </div>
    )
}
const AboutUsSection = () => {
    const style = {color : globalStyles.mainThemeColor , padding : "10px" , borderRadius : "3px"}
    return(
        <div>
            <h1 className="d-flex justify-content-center align-items-center pt-5 pb-2"><span className="ms-2 bg-success bg-gradient bg-opacity-25" style={style}>About <span style={{color : globalStyles.mainBg}}>Us</span></span></h1>
            <div className={styles.aboutSectionBoxesContainer}>
                <AboutSectionBox 
                iconClassName={"fa-regular fa-clock"} 
                headerContent={"Timing"} 
                paragraphContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                <AboutSectionBox 
                iconClassName={"fa-solid fa-gear"} 
                headerContent={"Setting"} 
                paragraphContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                <AboutSectionBox 
                iconClassName={"fa-solid fa-vault"} 
                headerContent={"Money back"} 
                paragraphContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                <AboutSectionBox 
                iconClassName={"fa-solid fa-globe"} 
                headerContent={"World Wide Shipping"} 
                paragraphContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
            </div>
        </div>
    )
}

const AboutSectionBox = ({iconClassName , headerContent , paragraphContent}) => {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center bg-success p-4 text-dark bg-opacity-25 rounded-1">
            <i className={`${iconClassName} fs-1`}></i>
            <h3 className="fs-3 pt-4 pb-2">{headerContent}</h3>
            <p style={{textAlign : "center" , textAlignLast : "center" , textAlign : "justify"}}>{paragraphContent}</p>
        </div>
    )
}

const NewCollectionSection = () => {
    const newCollectionData = {
        product1 : {
            title : "Product01" , 
            price : "100$" , 
            imageSrc : "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1684135768.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
        } , 
        
        product2 : {
            title : "Product02" , 
            price : "100$" , 
            imageSrc : "https://dkstatics-public.digikala.com/digikala-products/fef4d75b01a352241add7ae5cf2fc04130693dc1_1706096962.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
        } , 
        
        product3 : {
            title : "Product03" , 
            price : "100$" , 
            imageSrc : "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
        } , 
        
        product4 : {
            title : "Product04" , 
            price : "100$" , 
            imageSrc : "https://dkstatics-public.digikala.com/digikala-products/444db8fa74297b7eb133eedf29c98443ad141ed3_1681801303.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"} , 
        
    }
    const style = {color : globalStyles.mainThemeColor , padding : "10px" , borderRadius : "3px"}
    return(
        <div className={`${styles.newCollectionSection}`}>
            <h1 className="d-flex justify-content-center align-items-center pt-5 pb-2"><span className="bg-light bg-gradient bg-opacity-25" style={style}><span className="me-2" style={{color : globalStyles.mainBg}}>New</span>Collection</span></h1>
            <div className="row p-5" style={{gap : "25px"}}>
                {Object.keys(newCollectionData).map(item => 
                <NewCollectionBox 
                title={newCollectionData[item].title} price={newCollectionData[item].price} imageSrc={newCollectionData[item].imageSrc}/>)}
            </div>
        </div>
    )
}




const NewCollectionBox = ({title , price , imageSrc}) => {
    return(
        <div className="col p-3 rounded-2 bg-light bg-opacity-25 bg-gradient">
            <ProductOverlay imageSrc={imageSrc}/>
            <ProductContent title={title} price={price}/>
        </div>
    )
}

const ProductOverlay = ({imageSrc}) => {
    return(
        <div>
            <img src={imageSrc} className={`${styles.newCollectionProductImg} rounded-1`} alt="product"/>
        </div>
    )
}

const ProductContent = ({title , price}) => {
    return(
        <div className="d-flex flex-column mt-3">
            <div style={{background : "#FFF"}} className="d-flex justify-content-center fs-5 mb-1 rounded-1">{title}</div>
            <div style={{background : "#FFF"}} className="d-flex justify-content-center fs-5 mt-2 rounded-1">{price}</div>
        </div>
    )
}

const DiscountSection = () => {
    return(
        <div>

        </div>
    )
}
const ProductsSection = () => {
    return(
        <div>

        </div>
    )
}
const CustomersReviewsSection = () => {
    return(
        <div>

        </div>
    )
}
const OrderSection = () => {
    return(
        <div>

        </div>
    )
}
const QouteSection = () => {
    return(
        <div>

        </div>
    )
}

