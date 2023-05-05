import Container from "../Container";
import NavItem from "./NavItem";
import Title from "./Title";

const Navbar = () => {

    return (
        <div className="fixed w-full bg-white z-10">
            <div className="py-4 border-b-[0px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Title />
                        <NavItem />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;