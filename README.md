# ThemePicker

Theme Picker for NextJS based on shadcn components library.

## Demo
[themepicker.vercel.app](https://themepicker.vercel.app)

## Requirements

The picker uses these shadcn components. Be sure to have them installed on your site.

```
npx shadcn@latest add popover radio-group label
```

## Props

The picker exposes the props from the popover, and allows a custom trigger.

```
children: React.ReactNode
side?: "top" | "right" | "bottom" | "left"
align?: "start" | "center" | "end"
sideOffset?: number
alignOffset?: number
```