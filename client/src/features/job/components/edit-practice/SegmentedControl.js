import { createStyles, SegmentedControl, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: '#FC466B', to: '#3F5EFB' }),
  },

  control: {
    border: '0 !important',
  },

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
}));

const GradientSegmentedControl = ({sections}) => {
  const { classes } = useStyles();
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={sections}
      classNames={classes}
    />
  );
}

export default GradientSegmentedControl;