import { notification1 } from "../assets";
import { notificationImages } from "../constants";

export default function Notification({ className, title }) {
  return (
    <>
      <div
        className={`${
          className || ""
        } flex items-center p-4 pr-6 bg-n9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
      >
        <img
          src={notification1}
          alt="image"
          width={62}
          height={62}
          className="rounded-lg"
        />
        <div className="flex-1">
          <h6 className="mb-1 font-semibold text-base">{title}</h6>
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  alt={item}
                  className="w-full"
                  width={20}
                  height={20}
                />
              </li>
            ))}
            <div className="body-2 text-n-13 ml-6">1m ago</div>
          </ul>
        </div>
      </div>
    </>
  );
}
