const HomePageText = `This is the landing page of our website. You can put your note here and keep a track of it. As of now we only provide adding new note, deleting a note and updating the note. \n \t\t\t\t\t\t\t Hope you enjoy our kwik notes servvices. <3`
const AboutPageText = `Hello Guysss!!! Ayush this side. This is my first reactJS project. This project is done by me to keeep a check on my progress !! Hoping to make a better page in near future.`
const ContactPageText = `Your reviews are always welcomed!!! Do put your suggestion here below in the form and help me develop my skill <3`
const AdminName = `Ayush`
const Password = `AyushKumarBehera`

const HomeContent = {
    pageName:"Home",
    pageText:HomePageText
}
const AboutContent = {
    pageName:"About",
    pageText:AboutPageText
}
const ContactContent = {
    pageName:"Contact",
    pageText:ContactPageText
}

const lightmode = {
    cur_mode:"light",
    style:{
        color:"black",
        nav_bgColor:"grey",
        screen_bgColor:"white"
    }
}

const darkmode = {
    cur_mode:"dark",
    style:{
        color:"white",
        nav_bgColor:"blue",
        screen_bgColor:"black"
    }
}



export {HomeContent, AboutContent,ContactContent,AdminName, Password,lightmode, darkmode};


