import { useTheme } from 'next-themes';
import { createPortal } from 'react-dom';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  const toasterContent = (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: props.richColors
            ? 'group-[.toaster]:border group-[.toaster]:shadow-lg group-[.toaster]:pointer-events-auto'
            : 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:pointer-events-auto',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
        }
      }}
      {...props}
    />
  );

  // Only render in the browser
  if (typeof window === 'undefined') return null;

  return createPortal(toasterContent, document.body);
};

export { Toaster };
