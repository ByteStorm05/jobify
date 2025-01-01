import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PenBox, BriefcaseBusiness, Heart } from "lucide-react";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-2 flex justify-between items-center">
        <Link>
          <picture>
            {/* Default logo for larger screens */}
            <source srcSet="/red-logo.png" media="(max-width: 640px)"  />
            <img
              src="/logo.png"
              className="h-12 sm:h-20 w-auto transition-transform transform hover:scale-110 z-0"
              alt="Jobify Logo"
            />
          </picture>
        </Link>
        <div className="flex gap-2">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              <Link to="/post-job">Post a Job</Link>
            </Button>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="z-1 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
