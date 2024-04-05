import React, { useState } from "react";
import styles from './header.module.scss'
import globalStyles from '../../styles/variables.module.scss'
import logo from '../../assets/logo.svg'

export const Header = () => {
    return(
    <header className={styles.header}>
        <TopHeaderSection />
        <MainHeaderSection />
        <MobileNavMenu />
    </header>
    )
}

const TopHeaderSection = () => {
    return(
        <div className={styles.topHeader} style={{background: globalStyles.mainBg}}>
            <ContactSection />
            <NavMenu />
            <SingUpSignIn />
        </div>
    )
}

const MainHeaderSection = () => {
    return(
        <div className={styles.mainHeader} style={{display : "flex" , background: globalStyles.secondaryBg}}>
            <Logo position={"MainHeader"}/>
            <MainNavMenu />
            <CartAndSearch />
        </div>
    )
}

const ContactSection = () => {
    return(
        <div className={styles.contactSection}>
            <Email />
            <Phone />
        </div>
    )
}

const Email = () => {
    return(
        <a href="https://google.com" 
        style={{color: globalStyles.mainThemeColor}}>
            <i className="fa-solid fa-envelope" style={{marginInline: "5px" , fontSize : "18px"}}></i>
            <span style={{fontSize: "18px"}}>test@gmail.com</span>
        </a>
    )
}

const Phone = () => {
    return(
        <a href="https://google.com"
        style={{color: globalStyles.mainThemeColor , marginInline: "20px"}}>
            <i className="fa-solid fa-square-phone" style={{marginInline: "5px" , fontSize : "18px"}}></i>
            <span style={{fontSize: "18px"}}>09123456789</span>
        </a>
    )
}

// top header nav menu secttion
const NavMenu = () => {
    const navMenuItems = ["My Account" , "Cart" , "About" , "Contact"]
    return(
        <ul className={styles.topHeaderNavMenu} 
        style={{color: globalStyles.mainThemeColor}}>
            {navMenuItems.map(item => 
            <a href={`#${item}`} key={item}>
                <li className={styles.navMenuItem} style={{fontSize: "18px"}}>{item}</li>
            </a>)}
        </ul>
    )
}

// top header signup & signin
const SingUpSignIn = () => {
    return(
        <div className={styles.singUpSignInContainer}>
            <button className={styles.signInBtn}>SignIn</button>
            <button className={styles.signUpBtn}>SignUp</button>
        </div>
    )
}

const Logo = ({position}) => {
    return(
        <div className={position === "MainHeader" ? styles.headerLogo : styles.mobileNavMenuLogo} 
        style={{cursor: "pointer"}}>
            <a href="http://localhost:3000">
                <img src={logo} alt="logo"></img>
            </a>
        </div>
    )
}

// main header nav menu section 
const MainNavMenu = () => {
    const navMenuItems = ["Home" , "Shop" , "About" , "Contact"]
    return(
        <ul className={styles.mainHeaderNavMenu} 
        style={{color: globalStyles.mainThemeColor}}>
            {navMenuItems.map(item => 
            <a href={`#${item}`} key={item} style={{color: globalStyles.mainBg}}>
                <li className={styles.mainNavMenuItem} style={{fontSize: "18px" , marginInline: "20px"}}>{item}</li>
            </a>)}
        </ul>
    )
}

const CartAndSearch = () => {
    return(
        <div className={styles.cartAndSearchContainer}>
            <Search />
            <Cart />
        </div>
    )
}

const Search = () => {
    return(
        <div style={{
            border: `2px solid ${globalStyles.mainBg}` , 
            borderRadius : "3px" , 
            display: "flex" , 
            alignItems: "center"}}>
            <input type="search" 
            style={{border: "none" , outline: "none" , padding:"5px" , fontSize: "18px"}}
            placeholder="write here to search ..."></input>
            <i className="fa-solid fa-magnifying-glass"
            style={{
                padding: "5px" , 
                cursor: "pointer" , 
                fontSize: "18px" , 
                color: globalStyles.mainBg}}></i>
        </div>
    )
}

const Cart = () => {
    return(
        <div style={{
             color: globalStyles.mainThemeColor , 
             background: globalStyles.mainBg , 
             padding: "5px 10px" ,
             marginInline: "5px" , 
             borderRadius: "3px" , 
             cursor: "pointer"
        }}>
            <i className="fa-solid fa-cart-shopping" style={{paddingRight: "20px" , fontSize: "18px"}}></i>
            <span style={{fontSize: "18px"}}>0$</span>
        </div>
    )
}

const MobileNavMenu = () => {
    const mobileNavMenuItems = ["Home" , "My Account" , "Shop" , "Cart" , "About" , "Contact"];
    const[mobileNavMenuVisibility , setmobileNavMenuVisibility] = useState(false)
    return(
        <div className={mobileNavMenuVisibility ? `${styles.mobileNavMenuContainer} active` : styles.mobileNavMenuContainer}>
        {/* <i className={`${styles.mobileMenuCloseBtn} fa-solid fa-times`} onClick={setmobileNavMenuVisibility(false)}></i> */}
            <Logo position={"MobileNavMenuLogo"}/>
            <ul className={styles.mobileNavMenu}>
                {mobileNavMenuItems.map(item => 
                <a href={`https://website.com/${item}`} key={item}>
                    <li className={styles.mobileNavMenuItem}>{item}</li>
                </a>)}
            </ul>
        </div>
    )
}