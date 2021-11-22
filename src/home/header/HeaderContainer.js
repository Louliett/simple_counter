import { Header } from './Header';

export function HeaderContainer() {

    const navbarItems = ["Counter with Class", "Counter with Function", "Counter with Redux"];
    const headerTitle = "Simple Counter";

    return(
        <Header 
            navbarItems={navbarItems}
            headerTitle={headerTitle}
        />
    );
}