import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// // PublicRoute
// export function withPublic(Component) {
//   return function WithPublic(props) {
//     const user = useSelector((state) => state.user.currentUser);
//       const router = useRouter();
//       useEffect(() => {
//         if (user) {
//           router.push("/");
//           return <h3 className='mt-40 text-2xl text-red-500'>Loading...</h3>;
//         }
//        },[])

//       return <Component user={user} {...props} />
//     };
//   }

//Protect Route
function withProtected (Component)
{
  return function WithProtected (props)
  {
    const user = useSelector((state) => state.user.currentUser);
    const router = useRouter();

    useEffect(() =>
    {
      if (!user) {
        router.replace("/signin");
        return (
          <div>
            {
              <div className="flex justify-center items-center mt-48">
                <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-cyan-700"></div>
              </div>
            }
          </div>
        );
      }
    }, []);

    return <Component user={user} {...props} />;
  };
}

export default withProtected;
