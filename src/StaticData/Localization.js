import { Description, Language } from "@mui/icons-material";

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
    addNewCertificate: "Add New Certificate",
    ai: "Talk to AI",
    certificate: "Add New Certificate",
    talktoAi: "Talk to AI",
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
    addNewCertificate: "إضافة شهادة جديدة",
    ai: "تحدث مع الذكاء الاصطناعي",
    certificate: "إضافة شهادة جديدة",
    talktoAi: "تحدث مع الذكاء الاصطناعي",
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
    title2: "Edit My Profile",
    title3: "Chat with Admin",
    title4: "Reset Password",
    subTitle1: "General",
    subTitle2: "Account Settings",
    subTitle3: "Support",
    theme: "Theme",
    language: "Language",
    editMyProfile: "Edit My Profile",
    changePassword: "Change Password",
    chat: "Chat with us",
    about: "About ITI Freelancing Hub",
    notifications: "Notifications",
    back: "Back",
    settingBack: "Back to Settings",
    submit: "Submit",
    getStarted: "Get Started",
    currentPassword: "Current Password",
    newPassword: "New Password",
    repeatPassword: "Repeat New Password",
    passwordResetSuccess: "Password changed successfully!",
    passwordResetError: "Failed to change password. Try again.",
    editProfileDesc:
      "Your personal information is based on what you registered during the training. If you need to update any of this information, please contact the admin for assistance.",
    chatsMainDesc:
      "If you have any questions or encounter any issues, you’re in the right place.",
    chatSecDesc:
      "Welcome! If you have any questions or problems, feel free to chat with our admin here. Just type your message below, and we’ll get back to you as soon as possible. We're here to help!",
    resetPasswordDesc:
      'If you’ve forgotten your password, simply sign out and click on "Forgot Password?" on the login page to reset it using your registered email address.',
  },

  ar: {
    title: "الإعدادات",
    title2: "تعديل الملف الشخصي",
    title3: "تحدث مع المشرف",
    title4: "تغيير كلمة المرور",
    subTitle1: "عام",
    subTitle2: "إعدادات الحساب",
    subTitle3: "الدعم",
    theme: "السمة",
    language: "اللغة",
    editMyProfile: "تعديل ملفي الشخصي",
    changePassword: "تغيير كلمة المرور",
    chat: "تحدث معنا",
    about: "حول مركز العمل الحر ITI",
    notifications: "الإشعارات",
    back: "العودة الى الصفحة الرئيسية",
    settingBack: "العودة الى صفحة الإعدادات",
    submit: "تأكيد",
    getStarted: "ابدأ الآن",
    currentPassword: "كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    repeatPassword: "تكرار كلمة المرور الجديدة",
    passwordResetSuccess: "تم تغيير كلمة المرور بنجاح!",
    passwordResetError: "فشل تغيير كلمة المرور. حاول مرة اخرى.",
    editProfileDesc:
      "تعتمد معلوماتك الشخصية على ما تم تسجيله أثناء التدريب. إذا كنت بحاجة إلى تحديث أي من هذه المعلومات، يرجى التواصل مع المسؤول للمساعدة.",
    chatsMainDesc:
      "إذا كان لديك أي استفسارات أو حصلت على مشكلة، فإنك في المكان الصحيح.",
    chatSecDesc:
      "مرحبًا! إذا كانت لديك أي أسئلة أو مشكلات، فلا تتردد في التواصل مع المسؤول هنا. فقط اكتب رسالتك أدناه، وسنرد عليك في أقرب وقت ممكن. نحن هنا لمساعدتك!",
    resetPasswordDesc:
      "إذا نسيت كلمة المرور، ما عليك سوى تسجيل الخروج والنقر على 'هل نسيت كلمة المرور؟' في صفحة تسجيل الدخول لإعادة تعيينها باستخدام عنوان بريدك الإلكتروني المسجّل.",
  },
};
export const learnMoreLocalization = {
  en: {
    title: "What is the ITI Freelancing Hub?",
    subtitle:
      "The ITI Freelancing Hub is designed specifically for students who have secured their own freelancing jobs. This platform allows students to upload the details of their jobs for administrative approval. Once approved, these opportunities contribute to their graduation requirements.",
    howToUse: "How to Use the Platform?",
    back: "Back",
    copyright: "© 2025 ITI Freelancing Hub. All rights reserved.",
    slides: [
      {
        id: 1,
        title: "Registration and Sign In",
        content: [
          "Your admin will upload your email to the system. Once registered, you can log in to your account.",
          "Use your registered email to access the platform. If it's your first time, you can reset your password as needed.",
        ],
      },
      {
        id: 2,
        title: "User Profile Setup",
        content: [
          "Complete your profile with required information.",
          "Upload a profile picture and add your contact details.",
        ],
      },
      {
        id: 3,
        title: "Dashboard Overview",
        content: [
          "Access all features from your personalized dashboard.",
          "View analytics and reports in real-time.",
        ],
      },
      {
        id: 4,
        title: "Getting Support",
        content: [
          "Contact support team for any assistance.",
          "Browse FAQ section for quick answers.",
        ],
      },
    ],
  },

  ar: {
    title: "ما هو مركز العمل الحر في المعهد التكنولوجي؟",
    subtitle:
      "تم تصميم مركز العمل الحر في المعهد التكنولوجي خصيصًا للطلاب الذين حصلوا على وظائف العمل الحر الخاصة بهم. تتيح هذه المنصة للطلاب تحميل تفاصيل وظائفهم للحصول على الموافقة الإدارية. بمجرد الموافقة، تساهم هذه الفرص في متطلبات التخرج الخاصة بهم.",
    howToUse: "كيفية استخدام المنصة؟",
    back: "رجوع",
    copyright: "© 2025 ITI Freelancing Hub. All rights reserved.",
    slides: [
      {
        id: 1,
        title: "التسجيل وتسجيل الدخول",
        content: [
          "سيقوم المسؤول بتحميل بريدك الإلكتروني إلى النظام. بمجرد التسجيل، يمكنك تسجيل الدخول إلى حسابك.",
          "استخدم بريدك الإلكتروني المسجل للوصول إلى المنصة. إذا كانت هذه هي المرة الأولى لك، يمكنك إعادة تعيين كلمة المرور حسب الحاجة.",
        ],
      },
      {
        id: 2,
        title: "إعداد ملف المستخدم",
        content: [
          "أكمل ملفك الشخصي بالمعلومات المطلوبة.",
          "قم بتحميل صورة الملف الشخصي وأضف تفاصيل الاتصال الخاصة بك.",
        ],
      },
      {
        id: 3,
        title: "نظرة عامة على لوحة القيادة",
        content: [
          "الوصول إلى جميع الميزات من لوحة القيادة المخصصة لك.",
          "عرض التحليلات والتقارير في الوقت الفعلي.",
        ],
      },
      {
        id: 4,
        title: "الحصول على الدعم",
        content: [
          "اتصل بفريق الدعم لأي مساعدة.",
          "تصفح قسم الأسئلة الشائعة للحصول على إجابات سريعة.",
        ],
      },
    ],
  },
};
export const chooseJobLocalization = {
  en: {
    addJob: "Add New Job",
    chooseType: "Choose job type",
    back: "Back",
    next: "Next",
    instructions:
      "Please select the appropriate type to ensure it is categorized correctly. Here are the options:",
    types: [
      {
        id: "platform",
        label: "Freelancing job on platform",
        description:
          "Select this option if the job is posted on freelancing platforms like Mostaql,\nKhamsat,\nUpwork, etc.\nThese jobs typically involve working through a third-party site that handles payments and communications.",
      },
      {
        id: "direct",
        label: "Freelancing job with direct contact",
        description:
          "Choose this if the job comes from your personal network, such as connections on LinkedIn or referrals. These jobs often involve direct communication with the client without a middleman.",
      },
      {
        id: "remote",
        label: "Remote monthly job",
        description:
          "Use this option for traditional remote positions that offer a monthly salary. These jobs may have structured hours and responsibilities similar to in-office roles.",
      },
    ],
  },
  ar: {
    addJob: "إضافة وظيفة جديدة",
    chooseType: "اختر نوع الوظيفة",
    back: "رجوع",
    next: "التالي",
    instructions:
      "يرجى اختيار النوع المناسب لضمان تصنيفه بشكل صحيح. الخيارات المتاحة:",
    types: [
      {
        id: "platform",
        label: "وظيفة عمل حر على منصة",
        description:
          "اختر هذا الخيار إذا كانت الوظيفة منشورة على منصات العمل الحر مثل مستقل، خمسات، أب وورك، إلخ. غالباً ما يتم تنفيذ هذه الوظائف من خلال موقع وسيط يدير المدفوعات والتواصل.",
      },
      {
        id: "direct",
        label: "وظيفة عمل حر بتواصل مباشر",
        description:
          "اختر هذا الخيار إذا كانت الوظيفة من خلال معارفك الشخصية مثل لينكدإن أو توصية. غالباً ما تتطلب هذه الوظائف التواصل المباشر مع العميل بدون وسيط.",
      },
      {
        id: "remote",
        label: "وظيفة عن بُعد براتب شهري",
        description:
          "استخدم هذا الخيار للوظائف عن بُعد التي تقدم راتباً شهرياً. غالباً ما تحتوي هذه الوظائف على ساعات عمل وهيكل مسؤوليات مشابه للوظائف المكتبية.",
      },
    ],
  },
};
export const deleteModalLocalization = {
  en: {
    title: "Deletion Confirmation",
    message:
      "Are you sure you want to delete this {item}? This action cannot be undone, and all associated data will be permanently removed.",
    job: "job",
    certificate: "certificate",
    cancel: "Cancel",
    delete: "Delete",
  },
  ar: {
    title: "تأكيد الحذف",
    message:
      "هل أنت متأكد أنك تريد حذف {item}؟ هذا الإجراء لا يمكن التراجع عنه، وسيتم حذف جميع البيانات المرتبطة نهائيًا.",
    job: "الوظيفة",
    certificate: "الشهادة",
    cancel: "إلغاء",
    delete: "حذف",
  },
};
///forms
export const remoteFormLocalization = {
  en: {
    title: "Remote monthly job",
    jobTitle: {
      placeholder: "Job Title",
      required: "Required",
      desc: "Ensure that the title clearly describes the Job."
    },
    jobDescription: {
      placeholder: "Job Description",
      required: "Required",
      desc: "Ensure that the description clearly describes the Job."
    },
    startDate: {
      placeholder: "Start Date",
      required: "Required"
    },
    paymentInUSD: {
      placeholder: "Payment in USD",
      required: "Required"
    },
    paymentInEGP: {
      placeholder: "Payment in EGP",
      required: "Auto Generated"
    },
    companyName: {
      placeholder: "Company Name",
      required: "Required"
    },
    companyCountry: {
      placeholder: "Company Country",
      required: "Required"
    },
    companyContact: {
      placeholder: "Company Contact",
      required: "Required",
      desc: "Make sure the contact information is up-to-date and accurate."
    },
    proofOfWork: {
      placeholder: "Proof of Work",
      required: "Required",
      desc: "Prepare a PDF document that includes screenshots of communication with the company (such as emails, chat messages, or meeting summaries), examples or summaries of the work you performed remotely, and proof of payment such as salary slips, bank transfer confirmations, or invoices. Once you have compiled all the materials into a single PDF, upload it to Google Drive, copy the sharing link, and paste it here. Make sure the link is set to Anyone with the link can view so the admin team can access and review it."
    },
    buttons: {
      back: "Back",
      add: "Add",
      update: "Update"
    }
  },
  ar: {
    title: "عمل شهري عن بعد",
    jobTitle: {
      placeholder: "عنوان الوظيفة",
      required: "مطلوب",
      desc: "تأكد أن العنوان يصف الوظيفة بوضوح."
    },
    jobDescription: {
      placeholder: "وصف الوظيفة",
      required: "مطلوب",
      desc: "تأكد أن الوصف يصف الوظيفة بوضوح."
    },
    startDate: {
      placeholder: "تاريخ البدء",
      required: "مطلوب"
    },
    paymentInUSD: {
      placeholder: "الراتب بالدولار",
      required: "مطلوب"
    },
    paymentInEGP: {
      placeholder: "الراتب بالجنيه",
      required: "تُحسب تلقائيًا"
    },
    companyName: {
      placeholder: "اسم الشركة",
      required: "مطلوب"
    },
    companyCountry: {
      placeholder: "دولة الشركة",
      required: "مطلوب"
    },
    companyContact: {
      placeholder: "معلومات الاتصال بالشركة",
      required: "مطلوب",
      desc: "تأكد من أن معلومات الاتصال محدثة ودقيقة."
    },
    proofOfWork: {
      placeholder: "دليل العمل",
      required: "مطلوب",
      desc: "قم بإعداد ملف PDF يتضمن لقطات شاشة للتواصل مع الشركة (مثل رسائل البريد الإلكتروني أو الرسائل النصية أو ملخصات الاجتماعات)، وأمثلة أو ملخصات للعمل الذي قمت به عن بُعد، وإثبات الدفع مثل قسائم الرواتب أو تأكيدات التحويل البنكي أو الفواتير. بعد تجميع جميع المواد في ملف PDF واحد، قم برفعه إلى Google Drive، ونسخ رابط المشاركة، ولصقه هنا. تأكد من ضبط الرابط على 'أي شخص لديه الرابط يمكنه العرض' حتى يتمكن فريق الإدارة من الوصول إليه ومراجعته."
    },
    buttons: {
      back: "رجوع",
      add: "إضافة",
      update: "تحديث"
    }
  }
};
export const directFormLocalization = {
  en: {
    title: "Freelancing job with direct contact",
    jobTitle: {
      placeholder: "Job Title",
      required: "Required",
      desc: "Ensure that the title clearly describes the Job."
    },
    jobDescription: {
      placeholder: "Job Description",
      required: "Required",
      desc: "Ensure that the description clearly describes the Job."
    },
    startDate: {
      placeholder: "Start Date",
      required: "Required"
    },
    endDate: {
      placeholder: "End Date",
      required: "Required"
    },
    costInUSD: {
      placeholder: "Cost in USD",
      required: "Required"
    },
    costInEGP: {
      placeholder: "Cost in EGP",
      required: "Auto Generated"
    },
    teamMembers: {
      placeholder: "Team members",
      required: "optional"
    },
    platform: {
      placeholder: "Platform",
      required: "Required"
    },
    clientName: {
      placeholder: "Client Name",
      required: "Required"
    },
    clientCountry: {
      placeholder: "Client Country",
      required: "Required"
    },
    clientContact: {
      placeholder: "Client Contact",
      required: "Required",
      desc: "Make sure to include either the client's profile link on the platform or their contact number."
    },
    proofOfWork: {
      placeholder: "Proof of Work",
      required: "Required",
      desc: "Prepare a PDF document that includes screenshots of chats between you and the client, samples of the work completed, and proof of payment or invoices. Once you've compiled everything into a single PDF, upload it to Google Drive, copy the link, and paste it in here. Make sure the link is set to 'Anyone with the link can view' so that admin can access it."
    },
    buttons: {
      back: "Back",
      add: "Add",
      update: "Update"
    }
  },
  ar: {
    title: "عمل حر بتواصل مباشر",
    jobTitle: {
      placeholder: "عنوان الوظيفة",
      required: "مطلوب",
      desc: "تأكد أن العنوان يصف الوظيفة بوضوح."
    },
    jobDescription: {
      placeholder: "وصف الوظيفة",
      required: "مطلوب",
      desc: "تأكد أن الوصف يصف الوظيفة بوضوح."
    },
    startDate: {
      placeholder: "تاريخ البدء",
      required: "مطلوب"
    },
    endDate: {
      placeholder: "تاريخ الانتهاء",
      required: "مطلوب"
    },
    costInUSD: {
      placeholder: "التكلفة بالدولار",
      required: "مطلوب"
    },
    costInEGP: {
      placeholder: "التكلفة بالجنيه",
      required: "تُحسب تلقائيًا"
    },
    teamMembers: {
      placeholder: "أعضاء الفريق",
      required: "اختياري"
    },
    platform: {
      placeholder: "المنصة",
      required: "مطلوب"
    },
    clientName: {
      placeholder: "اسم العميل",
      required: "مطلوب"
    },
    clientCountry: {
      placeholder: "دولة العميل",
      required: "مطلوب"
    },
    clientContact: {
      placeholder: "معلومات التواصل مع العميل",
      required: "مطلوب",
      desc: "تأكد من تضمين إما رابط الملف الشخصي للعميل على المنصة أو رقم الاتصال الخاص به."
    },
    proofOfWork: {
      placeholder: "دليل العمل",
      required: "مطلوب",
      desc: "قم بإعداد ملف PDF يحتوي على لقطات شاشة للمحادثات بينك وبين العميل، عينات من العمل المنجز، وإثباتات الدفع أو الفواتير. بعد تجميع كل شيء في ملف PDF واحد، ارفعه على Google Drive، وانسخ الرابط وألصقه هنا. تأكد من ضبط الرابط على 'أي شخص لديه الرابط يمكنه العرض' حتى يتمكن المسؤول من الوصول إليه."
    },
    buttons: {
      back: "رجوع",
      add: "إضافة",
      update: "تحديث"
    }
  }
};
export const platformFormLocalization = {
  en: {
    title: "Freelancing job on platform",
    jobTitle: {
      placeholder: "Job Title",
      required: "Required",
      desc: "Ensure that the title clearly describes the Job."
    },
    jobDescription: {
      placeholder: "Job Description",
      required: "Required",
      desc: "Ensure that the description clearly describes the Job."
    },
    startDate: {
      placeholder: "Start Date",
      required: "Required"
    },
    endDate: {
      placeholder: "End Date",
      required: "Required"
    },
    costInUSD: {
      placeholder: "Cost in USD",
      required: "Required"
    },
    costInEGP: {
      placeholder: "Cost in EGP",
      required: "Auto Generated"
    },
    teamMembers: {
      placeholder: "Team members",
      required: "optional"
    },
    platform: {
      placeholder: "Platform",
      required: "Required"
    },
    studentProfile: {
      placeholder: "Your Profile on The Platform",
      required: "Required",
      desc: "Provide the link to your profile on the chosen platform."
    },
    clientName: {
      placeholder: "Client Name",
      required: "Required"
    },
    clientCountry: {
      placeholder: "Client Country",
      required: "Required"
    },
    clientProfile: {
      placeholder: "Client Profile on The Platform",
      required: "Required",
      desc: "Ensure to put the link to the client's profile on the chosen platform."
    },
    proofOfWork: {
      placeholder: "Proof of Work",
      required: "Required",
      desc: "Prepare a PDF document that includes screenshots of chats between you and the client, samples of the work completed, and proof of payment or invoices. Once you've compiled everything into a single PDF, upload it to Google Drive, copy the link, and paste it in here. Make sure the link is set to 'Anyone with the link can view' so that admin can access it."
    },
    buttons: {
      back: "Back",
      add: "Add",
      update: "Update"
    }
  },
  ar: {
    title: "عمل على منصة عمل حر",
    jobTitle: {
      placeholder: "عنوان الوظيفة",
      required: "مطلوب",
      desc: "تأكد أن العنوان يصف الوظيفة بوضوح."
    },
    jobDescription: {
      placeholder: "وصف الوظيفة",
      required: "مطلوب",
      desc: "تأكد أن الوصف يصف الوظيفة بوضوح."
    },
    startDate: {
      placeholder: "تاريخ البدء",
      required: "مطلوب"
    },
    endDate: {
      placeholder: "تاريخ الانتهاء",
      required: "مطلوب"
    },
    costInUSD: {
      placeholder: "التكلفة بالدولار",
      required: "مطلوب"
    },
    costInEGP: {
      placeholder: "التكلفة بالجنيه",
      required: "تُحسب تلقائيًا"
    },
    teamMembers: {
      placeholder: "أعضاء الفريق",
      required: "اختياري"
    },
    platform: {
      placeholder: "المنصة",
      required: "مطلوب"
    },
    studentProfile: {
      placeholder: "ملفك على المنصة",
      required: "مطلوب",
      desc: "قدّم رابط ملفك الشخصي على المنصة المختارة."
    },
    clientName: {
      placeholder: "اسم العميل",
      required: "مطلوب"
    },
    clientCountry: {
      placeholder: "دولة العميل",
      required: "مطلوب"
    },
    clientProfile: {
      placeholder: "ملف العميل على المنصة",
      required: "مطلوب",
      desc: "تأكد من وضع رابط ملف العميل على المنصة المختارة."
    },
    proofOfWork: {
      placeholder: "دليل العمل",
      required: "مطلوب",
      desc: "قم بإعداد ملف PDF يحتوي على لقطات شاشة للمحادثات بينك وبين العميل، عينات من العمل المنجز، وإثباتات الدفع أو الفواتير. بعد تجميع كل شيء في ملف PDF واحد، ارفعه على Google Drive، وانسخ الرابط وألصقه هنا. تأكد من ضبط الرابط على 'أي شخص لديه الرابط يمكنه العرض' حتى يتمكن المسؤول من الوصول إليه."
    },
    buttons: {
      back: "رجوع",
      add: "إضافة",
      update: "تحديث"
    }
  }
};
export const certificateFormLocalization = {
  en: {
    title: "Add New Certificate",
    certificateId: {
      placeholder: "Certificate ID",
      required: "Required",
      desc: "Ensure that the Certificate ID is Right."
    },
    certificateDescription: {
      placeholder: "Certificate Description",
      required: "Required",
      desc: "Ensure that the description clearly describes the certificate."
    },
    startDate: {
      placeholder: "Start Date",
      required: "Required"
    },
    endDate: {
      placeholder: "End Date",
      required: "Required"
    },
    company: {
      placeholder: "Company Name",
      required: "Required"
    },
    approach: {
      placeholder: "Course Approach",
      required: "Required"
    },
    proofOfCertificate: {
      placeholder: "Proof of Certificate",
      required: "Required",
      desc: "Upload a scanned copy of the certificate or a photo of the certificate, all the materials into a single PDF, upload it to Google Drive, copy the sharing link, and paste it here. Make sure the link is set to \"Anyone with the link can view\" so the admin team can access and review it."
    },
    proofOfWork: {
      placeholder: "Proof of Work",
      required: "Required"
    },
    buttons: {
      back: "Back",
      add: "Add",
      update: "Update"
    }
  },
  ar: {
    title: "اضافة شهادة جديدة",
    certificateId: {
      placeholder: "رقم الشهادة",
      required: "مطلوب",
      desc: "تأكد من صحة رقم الشهادة."
    },
    certificateDescription: {
      placeholder: "وصف الشهادة",
      required: "مطلوب",
      desc: "تأكد أن الوصف يصف الشهادة بوضوح."
    },
    startDate: {
      placeholder: "تاريخ البدء",
      required: "مطلوب"
    },
    endDate: {
      placeholder: "تاريخ الانتهاء",
      required: "مطلوب"
    },
    company: {
      placeholder: "اسم الشركة",
      required: "مطلوب"
    },
    approach: {
      placeholder: "نهج الدورة",
      required: "مطلوب"
    },
    proofOfCertificate: {
      placeholder: "إثبات الشهادة",
      required: "مطلوب",
      desc: "قم بتحميل نسخة ممسوحة ضوئيًا من الشهادة أو صورة للشهادة، جميع المواد في ملف PDF واحد، قم برفعه على Google Drive، انسخ رابط المشاركة، وألصقه هنا. تأكد من ضبط الرابط على \"أي شخص لديه الرابط يمكنه العرض\" حتى يتمكن فريق الإدارة من الوصول إليها ومراجعتها."
    },
    proofOfWork: {
      placeholder: "إثبات العمل",
      required: "مطلوب"
    },
    buttons: {
      back: "رجوع",
      add: "إضافة",
      update: "تحديث"
    }
  }
};
///home///
export const congratsLocalization = {
  en: {
    message:
      "Congratulations on reaching your target! We are incredibly proud of you and your hard work! This is a fantastic achievement, and we want you to take a moment to celebrate your success. Keep shining and moving forward, you’re doing great!",
  },
  ar: {
    message:
      "تهانينا على تحقيق هدفك! نحن فخورون بك وبجهودك الرائعة! هذا إنجاز رائع، ونريدك أن تأخذ لحظة للاحتفال بنجاحك. استمر في التألق والمضي قدمًا، فأنت تقوم بعمل رائع!",
  },
};
export const topCardsLocalization = {
  en: {
    track: "Track",
    totalJobs: "Total Jobs",
    completedJobs: "Completed and Approved Jobs",
    profitUSD: "Total Profit Earned (USD)",
    profitEGP: "Total Profit Earned (EGP)",
    certificates: "Uploaded Certificates",
  },
  ar: {
    track: "المسار",
    totalJobs: "إجمالي الوظائف",
    completedJobs: "الوظائف المكتملة والمعتمدة",
    profitUSD: "إجمالي الأرباح (دولار)",
    profitEGP: "إجمالي الأرباح (جنيه)",
    certificates: "الشهادات المرفوعة",
  },
};
export const addedModalLocalization = {
  en: {
    addedTitle: "Job Added Successfully",
    updatedTitle: "Job Updated Successfully",
    addedMessage:
      "Your job has been submitted successfully and will be reviewed by the admin. You will be notified once it has been checked.",
    updatedMessage:
      "Your job has been updated successfully and will be reviewed by the admin. You will be notified once it has been checked.",
    home: "Home",
  },
  ar: {
    addedTitle: "تمت إضافة الوظيفة بنجاح",
    updatedTitle: "تم تعديل الوظيفة بنجاح",
    addedMessage:
      "تم إرسال وظيفتك بنجاح وستتم مراجعتها من قبل المسؤول. سيتم إعلامك بمجرد الانتهاء من التحقق.",
    updatedMessage:
      "تم تعديل وظيفتك بنجاح وستتم مراجعتها من قبل المسؤول. سيتم إعلامك بمجرد الانتهاء من التحقق.",
    home: "الصفحة الرئيسية",
  },
};
//export const user = {
//   en: {
//     welcome: "Welcome Back!",
//     defaultName: "User",
//   },
//   ar: {
//     welcome: "مرحباً بك!",
//     defaultName: "المستخدم",
//   },
// };

