import React from "react";
import useTitle from "../../../Hooks/useTitle";

const CustomerLists = () => {
  useTitle("Customer Lists");
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th className="text-center">Customer Name</th>
            <th className="text-center">Customer Phone</th>
            <th className="text-center">Customer Email</th>
            <th className="text-center">Customer Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              1
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Farhan Hasin Dipro
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              01839254668
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              farhan.hasin.25@gmail.com
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Mohammadpur, Dhaka
            </td>
          </tr>
          <tr>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              2
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Farhan Hasin Dipro
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              01839254668
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              farhan.hasin.25@gmail.com
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Mohammadpur, Dhaka
            </td>
          </tr>
          <tr>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              3
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Farhan Hasin Dipro
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              01839254668
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              farhan.hasin.25@gmail.com
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Mohammadpur, Dhaka
            </td>
          </tr>
          <tr>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              4
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Farhan Hasin Dipro
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              01839254668
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              farhan.hasin.25@gmail.com
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Mohammadpur, Dhaka
            </td>
          </tr>
          <tr>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              5
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Farhan Hasin Dipro
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              01839254668
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              farhan.hasin.25@gmail.com
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Mohammadpur, Dhaka
            </td>
          </tr>
          <tr>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              6
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Farhan Hasin Dipro
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              01839254668
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              farhan.hasin.25@gmail.com
            </td>
            <td className="text-slate-900 text-center font-semibold bg-slate-50">
              Mohammadpur, Dhaka
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerLists;
