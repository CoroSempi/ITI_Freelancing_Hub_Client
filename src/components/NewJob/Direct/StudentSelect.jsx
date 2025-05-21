import React, { useContext, useEffect, useState } from "react";
import { Stack, Typography, useTheme, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../redux/slices/platform";
import { Delete } from "@mui/icons-material";
import LocalizationProvider from "../../../context/localizationContext";

export default function StudentSelect({
  placeholder,
  required,
  desc,
  total,
  shares,
  setShares,
  id,
}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [selectedStudents, setSelectedStudents] = useState([]);
  const { lang } = useContext(LocalizationProvider);

  const { students } = useSelector((state) => state.platform);
  const [currentTotal, setCurrentTotal] = useState(0);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  useEffect(() => {
    if (id && students.length > 0 && shares.length > 0) {
      const selected = students.filter((s) =>
        shares.some((share) => share.studentID === s._id)
      );
      setSelectedStudents(selected);
    }
  }, [id, students, shares]);

  useEffect(() => {
    const totalShare = shares.reduce(
      (acc, item) => acc + (item.studentShare || 0),
      0
    );
    setCurrentTotal(totalShare);
  }, [shares]);

  const handleAddStudent = (id) => {
    const student = students.find((s) => s._id === id);
    if (!student || selectedStudents.some((s) => s._id === id)) return;

    setSelectedStudents((prev) => [...prev, student]);

    setShares((prev) => [
      ...prev,
      {
        studentID: student._id,
        studentName: student.fullName,
        studentShare: 0,
      },
    ]);
  };

  const handleRemove = (id) => {
    setSelectedStudents((prev) => prev.filter((s) => s._id !== id));
    setShares((prev) => prev.filter((s) => s.studentID !== id));
  };

  const handleShareChange = (id, value) => {
    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue < 0) return;

    const newTotal = shares.reduce(
      (acc, item) =>
        item.studentID === id ? acc + numericValue : acc + item.studentShare,
      0
    );

    if (newTotal <= total) {
      setShares((prev) =>
        prev.map((s) =>
          s.studentID === id ? { ...s, studentShare: numericValue } : s
        )
      );
    }
  };

  return (
    <Stack sx={{ marginBottom: "30px", position: "relative" }}>
      <Typography
        fontWeight={550}
        fontSize={{
          xs: lang == "ar" ? "12px" : "14px",
          sm: lang == "ar" ? "14px" : "18px",
        }}
        fontFamily={lang == "ar" ? "ShamelBold" : ""}
        color={theme.palette.primary.main}>
        {placeholder}{" "}
        <span
          style={{
            fontFamily: lang == "ar" ? "Shamel" : "",
            fontSize: "13px",
            fontWeight: 500,
            color: theme.palette.primary.sec,
          }}>
          ({required})
        </span>
      </Typography>

      <Box position="relative">
        <select
          disabled={total <= 0 || currentTotal >= total}
          onChange={(e) => {
            handleAddStudent(e.target.value);
            e.target.value = "";
          }}
          style={{
            direction: "ltr",
            backgroundColor: theme.palette.primary.iti,
            fontSize: lang == "ar" ? "12px" : "17px",
            margin: "5px 0px",
            border: "none",
            borderRadius: "15px",
            color: "white",
            width: "100%",
            padding: "20px 20px",
            boxSizing: "border-box",
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            fontFamily: lang == "ar" ? "ShamelBold" : "",
          }}>
          <option disabled selected value="">
            {lang == "en"
              ? "Select your Team Members"
              : "اختر أعضاء الفريق الخاص بك"}
          </option>
          {students
            .filter(
              (std) => !selectedStudents.some((sel) => sel._id === std._id)
            )
            .map((std) => (
              <option
                key={std._id}
                value={std._id}
                style={{
                  color: "#000",
                  backgroundColor: "#fff",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                }}>
                {std.fullName}
              </option>
            ))}
        </select>

        <ArrowDropDownIcon
          sx={{
            color: "white",
            fontSize: "35px",
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "15px", color: theme.palette.primary.sec }}>
        <span>{desc}</span>
      </Typography>

      <Stack
        sx={{ maxHeight: "170px", overflow: "auto", direction: "ltr" }}
        mt={1}
        spacing={2}>
        {selectedStudents.map((std) => {
          const shareObj = shares.find((s) => s.studentID === std._id);
          return (
            <Stack
              key={std._id}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "10px",
                border: "2px solid rgba(191,39,45,0.3)",
                borderRadius: "15px",
                backgroundColor: theme.palette.background.default,
                boxShadow: "0px 1px 5px 1px rgba(1,1,1,0.2)",
              }}>
              <Stack direction="row" alignItems="center">
                <img
                  src={std.avatar || "/user.svg"}
                  alt="avatar"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 550,
                    color: theme.palette.primary.main,
                  }}>
                  {std.fullName?.split(" ").slice(0, 2).join(" ")}
                </Typography>
              </Stack>

              <Box position="relative">
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={shareObj?.studentShare ?? ""}
                  onChange={(e) => handleShareChange(std._id, e.target.value)}
                  style={{
                    fontSize: "17px",
                    background: "none",
                    border: "2px solid rgba(191,39,45,0.3)",
                    borderRadius: "15px",
                    color: theme.palette.primary.main,
                    width: "100px",
                    height: "50px",
                    padding: "20px 20px",
                    boxSizing: "border-box",
                  }}
                />
                <img
                  src="/usd.svg"
                  alt="usd"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>

              <Delete
                onClick={() => handleRemove(std._id)}
                sx={{ cursor: "pointer", fontSize: "25px", color: "red" }}
              />
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
