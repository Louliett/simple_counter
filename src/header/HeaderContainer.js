import { Header } from './Header';

export function HeaderContainer() {

    const navbarItems = ["Class", "Function", "Redux"];
    const headerTitle = "Simple Counter";

    return(
        <Header 
            navbarItems={navbarItems}
            headerTitle={headerTitle}
        />
    );
}