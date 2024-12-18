import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/product/get/${id}`);
  const [quantity, setQuantity] = useState(1);

  const basePrice = data?.price || 0;
  const totalPrice = (basePrice * quantity).toFixed(2);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (loading)
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">Error fetching data.</div>
    );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
          <div className="flex mt-4 gap-2">
            {data?.additionalImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index}`}
                className="w-16 h-16 object-cover rounded-md cursor-pointer border hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {data?.name}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {data?.description}
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-2xl md:text-3xl font-bold text-green-500">
              ${totalPrice}
            </span>
            {data?.discountPrice && (
              <span className="text-lg md:text-xl text-gray-400 line-through">
                ${data?.discountPrice}
              </span>
            )}
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-4 text-gray-600 max-[500px]:w-full max-[500px]:items-center max-[500px]:justify-center">
              <p className="text-2xl font-semibold">Offer expires in:</p>
              <div className="flex gap-3 space-x-2 w-full max-[500px]:items-center max-[500px]:justify-center">
                <div className="">
                  <span className="w-14 h-14 flex flex-col items-center justify-center bg-slate-100 text-2xl font-bold">
                    02
                  </span>
                  <p className="text-sm text-center">Days</p>
                </div>
                <div className="">
                  <span className="w-14 h-14 flex flex-col items-center justify-center bg-slate-100 text-2xl font-bold">
                    12
                  </span>
                  <p className="text-sm text-center">Hours</p>
                </div>
                <div className="">
                  <span className="w-14 h-14 flex flex-col items-center justify-center bg-slate-100 text-2xl font-bold">
                    45
                  </span>
                  <p className="text-sm text-center">Minutes</p>
                </div>
                <div className="">
                  <span className="w-14 h-14 flex flex-col items-center justify-center bg-slate-100 text-2xl font-bold">
                    05
                  </span>
                  <p className="text-sm text-center">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-6 py-2">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button className="w-full md:w-auto bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-200">
              Add to Cart
            </button>
            <button className="w-full md:w-auto border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-gray-500 transition duration-200">
              ♥ Wishlist
            </button>
          </div>

          <div className="text-gray-600 text-sm md:text-base">
            <p>
              <span className="font-semibold">SKU:</span> {data?.sku || "N/A"}
            </p>
            <p>
              <span className="font-semibold">CATEGORY:</span>{" "}
              {data?.category || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
