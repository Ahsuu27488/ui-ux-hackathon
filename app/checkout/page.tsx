"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCart } from "@/app/context/CartContext";
const Page = () => {
  const { cartItems } = useCart();

  // Calculate total amount of the cart
  // const totalAmount = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  return (
    <div>
      <div className="">
        <Image
          width={1440}
          height={328}
          src="/images/shop-bg.png"
          alt="banner"
          className="relative flex justify-center items-center blur-sm"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50">
          <h1 className="font-semibold text-5xl text-black">Checkout</h1>
          <p className="font-light text-lg text-black flex gap-4">
            <span className="font-medium">
              <Link href="/">Home</Link>
            </span>{" "}
            / <span className="">Checkout</span>
          </p>
        </div>
      </div>
      <div className="px-[120px] py-[80px] grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-8 max-sm:py-8">
        <div>
          <h1 className="font-bold text-4xl pb-10">Billing Details</h1>
          <div className="flex flex-col gap-6 max-sm:gap-3">
            <div className="flex flex-row justify-between  gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="first-name"
                  className="text-[16px] text-black font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="  "
                  className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7 w-full"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="last-name"
                  className="text-[16px] text-black font-medium mb-2 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder=""
                  className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7 w-full"
                />
              </div>
            </div>
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              Country / Region{" "}
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Sri Lanka"
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              Street address
            </label>
            <input
              type="text"
              id="last-name"
              placeholder=""
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              Town / City
            </label>
            <input
              type="text"
              id="last-name"
              placeholder=""
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              Province
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="#9F9F9F"
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              ZIP code
            </label>
            <input
              type="text"
              id="last-name"
              placeholder=""
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              Phone
            </label>
            <input
              type="text"
              id="last-name"
              placeholder=""
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <label
              htmlFor=""
              className="text-[16px] text-black font-medium mb-1 mt-4"
            >
              Email address
            </label>
            <input
              type="text"
              id="last-name"
              placeholder=""
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
            <input
              type="text"
              id="last-name"
              placeholder="Additional Information.."
              className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-3 px-24 max-sm:px-2 pt-28">
          <div className="flex justify-between">
            <h1 className="font-medium text-[24px] max-sm:text-[18px]">
              Product
            </h1>
            <h1 className="font-medium text-[24px] max-sm:text-[18px]">
              Subtotal
            </h1>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} 
              className="flex justify-between">
                <h1 className="font-medium text-[16px]  max-sm:text-[14px] text-[#9F9F9F]">
                  {item.name}{" "}
                  <span className="text-[12px] text-black  max-sm:text-[10px]">
                    {" "}
                    X {item.quantity}
                  </span>
                </h1>
                <h1 className=" text-[16px] font-light  max-sm:text-[14px]">
                  USD {item.price}$
                </h1>
              </div>
            ))
          )}
          <div className="flex justify-between">
            <h1 className="font-medium text-[16px]  max-sm:text-[14px]">
              Subtotal
            </h1>
            <h1 className=" text-[16px] font-light  max-sm:text-[14px]">
              Rs. 250,000.00
            </h1>
          </div>
          <div className="flex justify-between border-b border-b-gray-200 pb-4">
            <h1 className="font-medium text-[16px]  max-sm:text-[14px]">
              Total
            </h1>
            <h1 className=" text-[24px]  max-sm:text-[20px] font-bold text-[#B88E2F]">
              USD 250,000.00
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              width={14}
              height={14}
              src="/images/icons/circle.png"
              alt="dot"
              className="h-fit w-fit"
            />
            <h1>Direct Bank Transfer</h1>
          </div>
          <div className="font-light text-[16px] text-[#9F9F9F]  flex flex-col gap-3">
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="flex gap-4 items-center">
              {/* <Image  width={14} height={14}  src="/images/icons/stroke.png" alt="dot"  className="h-fit w-fit"/> */}
              <input type="radio" />

              <h1>Direct Bank Transfer</h1>
            </div>
            <div className="flex gap-4 items-center">
              {/* <Image  width={14} height={14}  src="/images/icons/stroke.png" alt="dot"  className="h-fit w-fit"/> */}
              <input type="radio" />
              <h1>Cash On Delivery</h1>
            </div>
          </div>
          <p className="text-[16px] font-light">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold">privacy policy</span>.
          </p>

          <AlertDialog>
            <AlertDialogTrigger>
              <button className="bg-transparent border border-black py-3 px-8 rounded-xl text-[20px] font-medium w-full">
                Place Order
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Order Confirmed!</AlertDialogTitle>
                <AlertDialogDescription>
                  Thank you for shopping with us. Your order is being processed,
                  and we'll notify you once it's shipped.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
                <AlertDialogAction>Continue Shopping</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Page;
