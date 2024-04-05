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
    return(
        <div>
            <h1>AboutUs</h1>
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
        <div className={styles.aboutSectionBox}>
            <i className={iconClassName}></i>
            <h3>{headerContent}</h3>
            <p>{paragraphContent}</p>
        </div>
    )
}

const NewCollectionSection = () => {
    return(
        <div>

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

