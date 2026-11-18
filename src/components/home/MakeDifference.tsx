// import { makeDifferenceData} from "../../services/json/homeJson/makeDiffeence.json";
// import MakeDifferenceCard from "./MakeDifferenceCard";


// const MakeDifference = () => {

//   return (
//     <section className="bg-[#171717] py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Section Heading */}
//         <div className="mb-12 text-center">
//           {/* <p className="mb-3 font-[Fredoka] text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
//             Be the Change
//           </p> */}
//             <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 font-[fredoka] text-xs font-semibold uppercase tracking-wider text-yellow-400 backdrop-blur-sm">
//           Be the change
//         </span>

//           <h2 className="font-[Fredoka] text-3xl font-bold leading-tight text-white  md:text-4xl">
//             How You Can{" "}
//             <span className="text-yellow-400">Make a Difference</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
//             Every small action can create a meaningful change in the lives
//             of women and children. Together, we can build a brighter future.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {makeDifferenceData.map((item) => (
//             <MakeDifferenceCard key={item.id} item={item} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MakeDifference;





import { makeDifferenceData } from "../../services/json/homeJson/makeDiffeence.json";
import MakeDifferenceCard from "./MakeDifferenceCard";

interface MakeDifferenceProps {
  compact?: boolean;
}

const MakeDifference = ({ compact = false }: MakeDifferenceProps) => {
  return (
    <section
      className={`bg-[#171717] ${
        compact ? "py-4 sm:py-10" : "py-8 sm:py-20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className={`text-center ${compact ? "mb-3" : "mb-6"}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
          Be the change
          </span>

          <h2
            className={`mt-3 font-[Fredoka] font-bold leading-tight text-white ${
              compact ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
            }`}
          >
            How You Can{" "}
            <span className="text-yellow-400">Make a Difference</span>
          </h2>

          <p
            className={`mx-auto max-w-2xl leading-relaxed text-gray-300 ${
              compact
                ? "mt-2 text-sm"
                : "mt-4 text-base leading-7"
            }`}
          >
            Every small action can create a meaningful change in the lives
            of women and children. Together, we can build a brighter future.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 ${
            compact ? "gap-3" : "gap-5"
          }`}
        >
          {makeDifferenceData.map((item) => (
            <MakeDifferenceCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MakeDifference;
