# ThemePicker

Theme Picker for NextJS based on shadcn components library.

<a href="https://themepicker.vercel.app"><img src="./public/images/themepicker-showcase.png" width="480" alt="ThemePicker"></a>

## Requirements

The picker uses these shadcn components. Be sure to have them installed on your site.

```
npx shadcn@latest add popover radio-group label
```

## Props

The picker exposes the props from the popover, and allows a custom trigger as children.

```
children: React.ReactNode
side?: "top" | "right" | "bottom" | "left"
align?: "start" | "center" | "end"
sideOffset?: number
alignOffset?: number
```

## Usage

```
<ThemePicker
  side="top"
  align="center"
  alignOffset={0}
  sideOffset={8}>
  Choose your theme
</ThemePicker>
```