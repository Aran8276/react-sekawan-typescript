import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link, useSearchParams } from "react-router-dom";
import { NavLinkType } from "../App";
import { Input } from "@nextui-org/input";
import { Search } from "lucide-react";
import { ChangeEvent, FormEvent, RefObject } from "react";

interface SelfProps {
  navLinks: NavLinkType[];
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  searchFormHandler: (e: FormEvent<HTMLFormElement>) => void;
  searchInputRef: RefObject<HTMLInputElement>;
}

export default function PageNavbar(props: SelfProps) {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search") ?? "";

  return (
    <div className="py-3">
      <Navbar>
        <NavbarBrand>
          <Link to="/">
            <img className="rounded-full w-12" src="/application-logo.png" />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center" className="hidden sm:flex gap-4">
          {props.navLinks.map((item) => {
            return (
              <NavbarItem>
                <Link color="foreground" to={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <form onSubmit={(e) => props.searchFormHandler(e)}>
              <Input
                name="search"
                defaultValue={searchValue}
                placeholder="Cari"
                className="w-full"
                ref={props.searchInputRef}
                startContent={
                  <div className="pr-1">
                    <Search className="opacity-40" />
                  </div>
                }
                onChange={(e) => props.searchHandler(e)}
              />
            </form>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
