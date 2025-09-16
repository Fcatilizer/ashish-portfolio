import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { EnhancedThemeSwitch } from "@/components/enhanced-theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  LinkedInIcon,
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-white/10 backdrop-blur-sm border border-white/20",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block bg-white/20 border border-white/30" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6">
      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20">
        <NextUINavbar 
          maxWidth="full" 
          className="bg-transparent shadow-none"
          classNames={{
            wrapper: "px-6 py-2",
          }}
        >
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink className="flex justify-start items-center gap-1" href="/">
                {/* <Logo /> */}
                <p className="font-bold text-inherit text-lg">Ashish Gaurav</p>
              </NextLink>
            </NavbarBrand>
            
            <ul className="hidden lg:flex gap-6 justify-start ml-6">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      "px-3 py-2 rounded-lg transition-all duration-300 ease-out font-medium",
                      "hover:bg-white/10 hover:transform hover:scale-105",
                      "data-[active=true]:text-primary data-[active=true]:bg-white/15 data-[active=true]:shadow-lg"
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>

            {/* Mobile menu toggle with frosted effect */}
            <NavbarMenuToggle className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300" />
          </NavbarContent>

            <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
            <NavbarItem className="flex gap-3">
              <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
              className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
              <LinkedInIcon className="text-default-500 hover:text-blue-400" size={20} />
              </Link>
              <Link 
              isExternal 
              aria-label="Github" 
              href={siteConfig.links.github}
              className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
              <GithubIcon className="text-default-500 hover:text-default-300" size={20} />
              </Link>
              <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
              className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
              <TwitterIcon className="text-default-500 hover:text-sky-400" size={20} />
              </Link>
              {/* Enhanced theme switch with animation */}
              <div className="flex items-center">
              <EnhancedThemeSwitch />
              </div>
            </NavbarItem>
            </NavbarContent>

          {/* Enhanced mobile menu with frosted glass */}
          <NavbarMenu className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl mt-2 shadow-2xl">
            <div className="flex flex-col gap-2 p-4">
              {siteConfig.navItems.map((item, index) => (
                <NavbarMenuItem key={item.href}>
                  <NextLink
                    className={clsx(
                      "w-full px-4 py-3 rounded-xl transition-all duration-300 font-medium",
                      "hover:bg-white/10 hover:transform hover:scale-105",
                      "data-[active=true]:text-primary data-[active=true]:bg-white/15"
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarMenuItem>
              ))}
              
              {/* Social links in mobile menu */}
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                <Link
                  isExternal
                  aria-label="LinkedIn"
                  href={siteConfig.links.linkedin}
                  className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <LinkedInIcon className="text-default-500" size={20} />
                </Link>
                <Link 
                  isExternal 
                  aria-label="Github" 
                  href={siteConfig.links.github}
                  className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <GithubIcon className="text-default-500" size={20} />
                </Link>
              </div>
            </div>
          </NavbarMenu>
        </NextUINavbar>
      </div>
    </div>
  );
};