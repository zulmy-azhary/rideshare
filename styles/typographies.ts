const typography = {
  title: {
    xl: {
      fontSize: 34,
      lineHeight: 41,
      letterSpacing: 0,
    },
    lg: {
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0,
    },
    md: {
      fontSize: 24,
      lineHeight: 30,
      letterSpacing: 0,
    },
    sm: {
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: 0,
    },
  },
  headline: {
    lg: { fontSize: 20, lineHeight: 26, letterSpacing: 0 },
    sm: { fontSize: 18, lineHeight: 24, letterSpacing: 0 },
  },
  subhead: {
    lg: { fontSize: 16, lineHeight: 20, letterSpacing: 0 },
    sm: { fontSize: 14, lineHeight: 18, letterSpacing: 0 },
  },
  body: {
    lg: { fontSize: 16, lineHeight: 24, letterSpacing: 0 },
    md: { fontSize: 14, lineHeight: 22, letterSpacing: 0 },
    sm: { fontSize: 12, lineHeight: 18, letterSpacing: 0 },
  },
  label: {
    lg: { fontSize: 16, lineHeight: 24, letterSpacing: 0 },
    md: { fontSize: 14, lineHeight: 18, letterSpacing: 0 },
    sm: { fontSize: 12, lineHeight: 16, letterSpacing: 0 },
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
};

const title = {
  xl: {
    titleXLRegular: { ...typography.title.xl, fontFamily: "Poppins_Regular" },
    titleXLMedium: { ...typography.title.xl, fontFamily: "Poppins_Medium" },
    titleXLSemibold: { ...typography.title.xl, fontFamily: "Poppins_SemiBold" },
    titleXLBold: { ...typography.title.xl, fontFamily: "Poppins_Bold" },
    titleXLExtrabold: { ...typography.title.xl, fontFamily: "Poppins_ExtraBold" },
  },
  lg: {
    titleLGRegular: { ...typography.title.lg, fontFamily: "Poppins_Regular" },
    titleLGMedium: { ...typography.title.lg, fontFamily: "Poppins_Medium" },
    titleLGSemibold: { ...typography.title.lg, fontFamily: "Poppins_SemiBold" },
    titleLGBold: { ...typography.title.lg, fontFamily: "Poppins_Bold" },
    titleLGExtrabold: { ...typography.title.lg, fontFamily: "Poppins_ExtraBold" },
  },
  md: {
    titleMDRegular: { ...typography.title.md, fontFamily: "Poppins_Regular" },
    titleMDMedium: { ...typography.title.md, fontFamily: "Poppins_Medium" },
    titleMDSemibold: { ...typography.title.md, fontFamily: "Poppins_SemiBold" },
    titleMDBold: { ...typography.title.md, fontFamily: "Poppins_Bold" },
    titleMDExtrabold: { ...typography.title.md, fontFamily: "Poppins_ExtraBold" },
  },
  sm: {
    titleSMRegular: { ...typography.title.sm, fontFamily: "Poppins_Regular" },
    titleSMMedium: { ...typography.title.sm, fontFamily: "Poppins_Medium" },
    titleSMSemibold: { ...typography.title.sm, fontFamily: "Poppins_SemiBold" },
    titleSMBold: { ...typography.title.sm, fontFamily: "Poppins_Bold" },
    titleSMExtrabold: { ...typography.title.sm, fontFamily: "Poppins_ExtraBold" },
  },
};

const headline = {
  lg: {
    headlineLGRegular: { ...typography.headline.lg, fontFamily: "Poppins_Regular" },
    headlineLGMedium: { ...typography.headline.lg, fontFamily: "Poppins_Medium" },
    headlineLGSemibold: { ...typography.headline.lg, fontFamily: "Poppins_SemiBold" },
    headlineLGBold: { ...typography.headline.lg, fontFamily: "Poppins_Bold" },
  },
  sm: {
    headlineSMRegular: { ...typography.headline.sm, fontFamily: "Poppins_Regular" },
    headlineSMMedium: { ...typography.headline.sm, fontFamily: "Poppins_Medium" },
    headlineSMSemibold: { ...typography.headline.sm, fontFamily: "Poppins_SemiBold" },
    headlineSMBold: { ...typography.headline.sm, fontFamily: "Poppins_Bold" },
  },
};

const subhead = {
  lg: {
    subheadLGRegular: { ...typography.subhead.lg, fontFamily: "Poppins_Regular" },
    subheadLGMedium: { ...typography.subhead.lg, fontFamily: "Poppins_Medium" },
    subheadLGSemibold: { ...typography.subhead.lg, fontFamily: "Poppins_SemiBold" },
    subheadLGBold: { ...typography.subhead.lg, fontFamily: "Poppins_Bold" },
  },
  sm: {
    subheadSMRegular: { ...typography.subhead.sm, fontFamily: "Poppins_Regular" },
    subheadSMMedium: { ...typography.subhead.sm, fontFamily: "Poppins_Medium" },
    subheadSMSemibold: { ...typography.subhead.sm, fontFamily: "Poppins_SemiBold" },
    subheadSMBold: { ...typography.subhead.sm, fontFamily: "Poppins_Bold" },
  },
};

const body = {
  lg: {
    bodyLGRegular: { ...typography.body.lg, fontFamily: "Poppins_Regular" },
    bodyLGMedium: { ...typography.body.lg, fontFamily: "Poppins_Medium" },
    bodyLGSemibold: { ...typography.body.lg, fontFamily: "Poppins_SemiBold" },
    bodyLGBold: { ...typography.body.lg, fontFamily: "Poppins_Bold" },
  },
  md: {
    bodyMDRegular: { ...typography.body.md, fontFamily: "Poppins_Regular" },
    bodyMDMedium: { ...typography.body.md, fontFamily: "Poppins_Medium" },
    bodyMDSemibold: { ...typography.body.md, fontFamily: "Poppins_SemiBold" },
    bodyMDBold: { ...typography.body.md, fontFamily: "Poppins_Bold" },
  },
  sm: {
    bodySMRegular: { ...typography.body.sm, fontFamily: "Poppins_Regular" },
    bodySMMedium: { ...typography.body.sm, fontFamily: "Poppins_Medium" },
    bodySMSemibold: { ...typography.body.sm, fontFamily: "Poppins_SemiBold" },
    bodySMBold: { ...typography.body.sm, fontFamily: "Poppins_Bold" },
  },
};

const label = {
  lg: {
    labelLGRegular: { ...typography.label.lg, fontFamily: "Poppins_Regular" },
    labelLGMedium: { ...typography.label.lg, fontFamily: "Poppins_Medium" },
    labelLGSemibold: { ...typography.label.lg, fontFamily: "Poppins_SemiBold" },
    labelLGBold: { ...typography.label.lg, fontFamily: "Poppins_Bold" },
  },
  md: {
    labelMDRegular: { ...typography.label.md, fontFamily: "Poppins_Regular" },
    labelMDMedium: { ...typography.label.md, fontFamily: "Poppins_Medium" },
    labelMDSemibold: { ...typography.label.md, fontFamily: "Poppins_SemiBold" },
    labelMDBold: { ...typography.label.md, fontFamily: "Poppins_Bold" },
  },
  sm: {
    labelSMRegular: { ...typography.label.sm, fontFamily: "Poppins_Regular" },
    labelSMMedium: { ...typography.label.sm, fontFamily: "Poppins_Medium" },
    labelSMSemibold: { ...typography.label.sm, fontFamily: "Poppins_SemiBold" },
    labelSMBold: { ...typography.label.sm, fontFamily: "Poppins_Bold" },
  },
};

const caption = {
  captionRegular: { ...typography.caption, fontFamily: "Poppins_Regular" },
  captionMedium: { ...typography.caption, fontFamily: "Poppins_Medium" },
  captionSemibold: { ...typography.caption, fontFamily: "Poppins_SemiBold" },
};

export const typographies = {
  ...title.xl,
  ...title.lg,
  ...title.md,
  ...title.sm,
  ...headline.lg,
  ...headline.sm,
  ...subhead.lg,
  ...subhead.sm,
  ...body.lg,
  ...body.md,
  ...body.sm,
  ...label.lg,
  ...label.md,
  ...label.sm,
  ...caption,
};
