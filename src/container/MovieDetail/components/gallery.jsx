// import React from "react";
// import { useSelector } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { backdropSelector, posterSelector } from "../reselect";
// import ".././movie-detail.css";
// const Gallery = () => {

//   const { backdrops, posters } = useSelector(
//     createStructuredSelector({
//       backdrops: backdropSelector,
//       posters: posterSelector,
//     })
//   );

//   return (
//     <>
//       {/* <!-- Backdrop --> */}
//       <ul className="backdrop">
//         <li>
//           <img
//             src="https://image.tmdb.org/t/p/w300/58Gl3xXEvhF557tZER55rbPiMOT.jpg"
//             alt=""
//           />
//         </li>
//         <li>
//           <img
//             src="https://image.tmdb.org/t/p/w300/r5dd3dNOfMls0zM4zceudwzuyXV.jpg"
//             alt=""
//           />
//         </li>
//         <li className="poster-one">
//           <img
//             src="https://image.tmdb.org/t/p/w300/mZ28Iwl3cSUSpfhe6cIkamhH7aT.jpg"
//             alt=""
//           />
//         </li>
//         <li className="poster-two">
//           <img
//             src="https://image.tmdb.org/t/p/w300/rQu85gqM63M163ceJxVtlHAhTae.jpg"
//             alt=""
//           />
//         </li>
//         <li>
//           <img
//             src="https://image.tmdb.org/t/p/w300/kXzwQdIBmzxfz8LCXI2h31EXYJf.jpg"
//             alt=""
//           />
//         </li>
//         <li>
//           <img
//             src="https://image.tmdb.org/t/p/w300/rFJdk7qsaCJYCMoGyMu9zkbCYfv.jpg"
//             alt=""
//           />
//         </li>
//         <li>
//           <img
//             src="https://image.tmdb.org/t/p/w300/6OLdoU8yT4kaePz0F72E78hjbET.jpg"
//             alt=""
//           />
//         </li>
//       </ul>
//     </>
//   );
// };

// export default React.memo(Gallery);

import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { backdropSelector, posterSelector } from "../reselect";
import { isEmpty } from "../../../helper/common";
import ".././movie-detail.css";

const Gallery = () => {
  const { backdrops, posters } = useSelector(
    createStructuredSelector({
      backdrops: backdropSelector,
      posters: posterSelector,
    })
  );

  if (
    !isEmpty(backdrops) &&
    backdrops.length > 4 &&
    !isEmpty(posters) &&
    posters.length > 1
  ) {
    return (
      <>
        {/* <!-- Backdrop --> */}
        <ul className="backdrop">
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                backdrops[backdrops.length - 1].file_path
              }`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                backdrops[backdrops.length - 2].file_path
              }`}
              alt=""
            />
          </li>
          <li className="poster-one">
            <img
              src={`https://image.tmdb.org/t/p/w300/${posters[0].file_path}`}
              alt=""
            />
          </li>
          <li className="poster-two">
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                posters[posters.length - 2].file_path
              }`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                backdrops[backdrops.length - 3].file_path
              }`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                backdrops[backdrops.length - 4].file_path
              }`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                backdrops[backdrops.length - 5].file_path
              }`}
              alt=""
            />
          </li>
        </ul>
      </>
    );
  } else {
    return <div>Nothing returns from selector</div>;
  }
};

export default React.memo(Gallery);
