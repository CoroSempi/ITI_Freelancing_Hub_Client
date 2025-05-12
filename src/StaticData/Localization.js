import { Language } from "@mui/icons-material";

export const signInLocalization = {
  en: {
    title: "Sign In",
    subtitle: "Craft Your Career, Shape Your Path",
    fields: {
      email: {
        label: "Email",
      },
      password: {
        label: "Password",
      },
    },
    notice:
      "If your email is not registered, please contact the administrator at your branch for assistance.",
    learnMore: {
      text: "Click here to explore features, benefits, and how to make the most of your experience.",
      linkText: "Learn More!",
      url: "/learn-more",
    },
    forget: "Forget your password ?",
  },

  ar: {
    title: "تسجيل الدخول",
    subtitle: "اصنع مستقبلك المهني، وشق طريقك بنفسك",
    fields: {
      email: {
        label: "البريد الإلكتروني",
      },
      password: {
        label: "كلمة المرور",
      },
    },
    notice:
      "إذا لم يكن بريدك الإلكتروني مسجلاً، يرجى التواصل مع مسؤول الفرع للحصول على المساعدة.",
    learnMore: {
      text: "انقر هنا لاستكشاف المزايا والخدمات، وتعلّم كيفية الاستفادة القصوى من تجربتك",
      linkText: "تعرف على المزيد !",
      url: "/learn-more",
    },
    forget: " نسيت كلمة المرور ؟",
  },
};

export const errors = {
  en: {
    emailRequired: "Email is required",
    invalidEmail: "Entered value does not match email format",
    passwordRequired: "Password is required",
    passwordMinLength: "Password must be at least 8 characters",
  },
  ar: {
    emailRequired: "البريد الإلكتروني مطلوب",
    invalidEmail: "تنسيق البريد الإلكتروني غير صالح",
    passwordRequired: "كلمة المرور مطلوبة",
    passwordMinLength: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل",
  },
};

export const forgetPasswordLocalization = {
  en: {
    title: "Forget Password",
    subtitle: "Craft Your Career, Shape Your Path",
    fields: {
      email: {
        label: "Email",
      },
    },
    notice:
      "If you've forgotten your password, please enter the email address you registered with in ITI, You will receive a code to reset your password.",
    signIn: "Back to Sign in Page",
    button: "Send Code",
  },

  ar: {
    title: "استعادة كلمة المرور",
    subtitle: "اصنع مستقبلك المهني، وشق طريقك بنفسك",
    fields: {
      email: {
        label: "البريد الإلكتروني",
      },
    },
    notice:
      "إذا كنت قد نسيت كلمة المرور الخاصة بك، يرجى إدخال عنوان البريد الإلكتروني الذي سجلت به في ITI، وسوف تتلقى رمزاً لإعادة تعيين كلمة المرور.",
    signIn: "العودة الى صفحة تسجيل الدخول",
    button: "إرسال الرمز",
  },
};

export const verifyCodyLocalization = {
  en: {
    title: "Enter Verification Code",
    subtitle: "Craft Your Career, Shape Your Path",
    notice:
      "We have sent an email to your registered email address with a verification code.",
    submit: "Verify Code",
    resend: "Resend Code",
    signIn: "Back to Sign in Page",
  },

  ar: {
    title: "أدخل رمز التحقق",
    subtitle: "اصنع مستقبلك المهني، وشق طريقك بنفسك",
    notice:
      "لقد أرسلنا بريدًا إلكترونيًا إلى عنوان بريدك الإلكتروني المسجل يحتوي على رمز التحقق.",
    submit: "تحقق من الرمز",
    resend: "إعادة إرسال الرمز",
    signIn: "العودة إلى صفحة تسجيل الدخول",
  },
};

export const resetPassword = {
  en: {
    title: "Enter Your New Password",
    subtitle: "Craft Your Career, Shape Your Path",
    placeholder1: "Password",
    placeholder2: "Repeat Password",
    submit: "Change Passsword",
    signIn: "Back to Sign in Page",
  },

  ar: {
    title: "أدخل كلمة المرور الجديدة",
    subtitle: "اصنع مستقبلك المهني، وشق طريقك بنفسك",
    placeholder1: "كلمة المرور",
    placeholder2: "أعد إدخال كلمة المرور",
    submit: "تغيير كلمة المرور",
    signIn: "العودة إلى صفحة تسجيل الدخول",
  },
};

export const passwordDialog = {
  en: {
    title: "Changed Successfully!",
    context:
      "Your password has been changed successfully. You can now sign in using your new password.",
    submit: "Sign IN",
  },

  ar: {
    title: "! تم التغيير بنجاح",
    context:
      "تم تغيير كلمة المرور الخاصة بك بنجاح. يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.",
    submit: "تسجيل الدخول",
  },
};

export const headerLocalization = {
  en: {
    subTitle: "Craft Your Career, Shape Your Path",
    home: "Home",
    chats: "Chats",
    addNewJob: "Add New Job",
    certificate: "Add New Certificate",
    notification: "Notification",
    settings: "Settings",
    chat: "Chat with us",
    about: "About ITI Freelancing Hub",
    about2: "About",
    account: "Account",
    signOut: "Sign out",
  },

  ar: {
    subTitle: "اصنع مستقبلك المهني، وحدد مسارك",
    home: "الصفحة الرئيسية",
    chats: "المحادثات",
    addNewJob: "إضافة عمل جديدة",
    certificate: "إضافة شهادة جديدة",
    notification: "الإشعارات",
    settings: "الإعدادات",
    chat: "تحدث معنا",
    about: "حول مركز العمل الحر ITI",
    about2: "عن المنصة",
    account: "الحساب",
    signOut: "تسجيل الخروج",
  },
};

export const settingsLocalization = {
  en: {
    title: "Settings",
    subTitle1: "General",
    subTitle2: "Account Settings",
    subTitle3: "Support",
    theme: "Theme",
    language: "Language",
    editMyProfile: "Edit My Profile",
    changePassword: "Change Password",
    chat: "Chat with us",
    about: "About ITI Freelancing Hub",
  },

  ar: {
    title: "الإعدادات",
    subTitle1: "عام",
    subTitle2: "إعدادات الحساب",
    subTitle3: "الدعم",
    theme: "السمة",
    language: "اللغة",
    editMyProfile: "تعديل ملفي الشخصي",
    changePassword: "تغيير كلمة المرور",
    chat: "تحدث معنا",
    about: "حول مركز العمل الحر ITI",
  },
};
