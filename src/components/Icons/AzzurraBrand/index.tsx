import * as React from 'react';

interface AzzurraBrandProps {
  color?: 'color' | 'white';
  width?: number;
  height?: number;
  className?: string;
}

const AzzurraBrand = ({
  className,
  color = 'color',
  width = 233,
  height = 120
}: AzzurraBrandProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 233 120`}
      fill="none"
    >
      {color !== 'color' ? null : (
        <>
          <path
            d="M79.28 119.01v-.06l3.73-9.48c.06-.14.17-.22.33-.22.07 0 .14 0 .2.03.1.04.17.1.19.19l3.72 9.47v.06l-.35.83c-.03.06-.12.06-.14 0l-1.22-3.28h-4.7l-1.27 3.28c-.02.06-.11.07-.14 0l-.35-.82Zm6.17-3.17-2.23-5.72-.04.03.15.42-2.04 5.27h4.16ZM98.53 109.75c0-.11.04-.2.11-.27s.17-.1.28-.1h4.61c.62 0 1.17.14 1.65.42.38.22.71.54.94.92.3.49.45 1.06.45 1.71 0 .94-.28 1.69-.83 2.25-.55.56-1.29.85-2.21.85h-4.24v3.61s0 .04-.02.05l-.61.66c-.05.05-.13.02-.13-.05v-10.05Zm5 5.09c.68 0 1.23-.22 1.65-.66.42-.44.63-1.02.63-1.75s-.21-1.27-.64-1.71c-.42-.44-.97-.66-1.64-.66h-4.24v4.78h4.24ZM117.91 110.05l.61-.66c.05-.05.13-.02.13.05v9.71s0 .04-.02.05l-.61.66c-.05.05-.13.02-.13-.05v-9.71s0-.04.02-.05ZM133.49 110.07h-3.81c-.07 0-.1-.08-.05-.13l.55-.54s.03-.02.05-.02h7.84c.07 0 .1.08.05.13l-.55.54s-.03.02-.05.02h-3.27v9.08s0 .04-.02.05l-.61.66c-.05.05-.13.02-.13-.05v-9.74ZM146.91 119.01v-.06l3.73-9.48c.06-.14.17-.22.33-.22.07 0 .14 0 .2.03.1.04.17.1.19.19l3.72 9.47v.06l-.35.83c-.03.06-.12.06-.14 0l-1.22-3.28h-4.7l-1.27 3.28c-.02.06-.11.07-.14 0l-.35-.82Zm6.17-3.17-2.23-5.72-.04.03.15.42-2.04 5.27h4.16ZM166.28 119.76a.34.34 0 0 1-.11-.25v-9.41s0-.04.02-.05l.61-.66c.05-.05.13-.02.13.05v9.74h5.15s.04 0 .05.02l.57.54c.05.05.02.13-.05.13h-6.1c-.11 0-.2-.03-.28-.1ZM67.36 118.01c-.28.41-.68.73-1.19.96-.51.23-1.09.34-1.74.34s-1.21-.11-1.72-.34c-.5-.22-.9-.54-1.18-.94-.28-.4-.42-.87-.42-1.39v-4.04c0-.52.14-.98.42-1.39.28-.4.67-.72 1.18-.94.5-.22 1.08-.34 1.72-.34s1.23.11 1.74.34c.51.23.91.55 1.19.96.26.38.41.81.42 1.3 0 .05.06.09.11.07l.57-.25s.05-.04.05-.07c0-.58-.18-1.1-.52-1.55-.34-.47-.83-.83-1.45-1.09-.62-.26-1.32-.39-2.11-.39s-1.49.14-2.11.43c-.62.28-1.1.68-1.45 1.19-.34.51-.52 1.09-.52 1.74v4.04c0 .65.17 1.23.52 1.74.34.51.83.91 1.45 1.19.62.28 1.32.43 2.11.43s1.49-.13 2.11-.39c.62-.26 1.1-.62 1.45-1.09.33-.46.51-.97.52-1.55 0-.03-.02-.06-.05-.07l-.57-.25s-.11.01-.11.07c-.02.48-.16.92-.42 1.3Z"
            fill={'#a68142'}
          />
          <path
            d="M118.06 94.64c-4.32 0-8.28-1.7-11.15-4.79-2.81-3.03-4.36-7.11-4.36-11.51V64.73c0-.89.73-1.62 1.62-1.62h2.92c.1 0 .27.08.33.14v15.08c0 3.18 1.08 6.12 3.05 8.27 1.94 2.13 4.43 3.17 7.61 3.17s5.66-1.04 7.61-3.17c1.96-2.15 3.05-5.09 3.05-8.27V64.72c0-.91.99-1.62 1.84-1.62h2.92c.06 0 .11.05.11.11v15.12c0 4.4-1.55 8.49-4.36 11.51-2.88 3.09-6.84 4.79-11.15 4.79ZM158.76 94.64s-.07-.02-.09-.05c-1.47-2.53-3.14-4.9-4.82-6.84a35.15 35.15 0 0 0-2.75-2.83c-1.45-1.32-2.96-2.45-4.5-3.35-.84-.5-1.8-.97-2.75-1.37l-.62-.26v14.61c0 .06-.05.11-.11.11h-4.55c-.06 0-.11-.05-.11-.11V74.6c0-.06.05-.11.1-.11h.56c.23 0 2.3.06 5.29 1.13 1.42.51 2.84 1.17 4.22 1.96 1.36.78 2.7 1.71 4 2.77.65.53 1.31 1.1 1.95 1.71l.76.71v-2.36c0-.06.04-.1.1-.1 4.15-.19 6-3.43 5.96-6.37-.02-1.6-.58-3.1-1.58-4.21-1.12-1.25-2.72-1.93-4.61-1.97h-10.27c-.89 0-1.62-.73-1.62-1.62v-2.92c0-.06.05-.11.11-.11h11.86c3 0 5.61 1.04 7.54 3.02 1.72 1.77 2.81 4.2 3.07 6.85.26 2.65-.35 5.25-1.7 7.33-1.42 2.17-3.59 3.66-6.27 4.3l-.71.17.47.56c2.17 2.59 4.27 5.76 6.05 9.15.02.03.02.07 0 .1s-.05.05-.09.05h-4.87ZM190.95 94.64s-.07-.02-.09-.05c-1.47-2.53-3.14-4.9-4.82-6.84a35.15 35.15 0 0 0-2.75-2.83c-1.45-1.32-2.96-2.45-4.5-3.35-.85-.5-1.8-.97-2.75-1.37l-.62-.26v14.61c0 .06-.05.11-.11.11h-4.55c-.06 0-.11-.05-.11-.11V74.6c0-.06.05-.11.1-.11h.56c.23 0 2.3.06 5.29 1.13 1.42.51 2.84 1.17 4.22 1.96 1.36.78 2.7 1.71 4 2.77.65.53 1.31 1.11 1.95 1.71l.76.71v-2.36c0-.06.04-.1.1-.1 4.15-.19 6-3.43 5.96-6.37-.02-1.6-.58-3.1-1.58-4.21-1.12-1.25-2.72-1.93-4.61-1.97h-10.27c-.89 0-1.62-.73-1.62-1.62v-2.92c0-.06.05-.11.11-.11h11.86c3 0 5.61 1.04 7.54 3.02 1.72 1.77 2.81 4.2 3.07 6.85.26 2.65-.35 5.25-1.7 7.33-1.42 2.17-3.59 3.66-6.27 4.3l-.71.17.47.56c2.17 2.59 4.27 5.76 6.05 9.15.02.03.02.07 0 .1s-.05.05-.09.05h-4.88ZM39.22 94.64s-.09-.03-.1-.07l-1.48-4.6s0-.08.03-.11l22-22.1H39.18s-.06-.01-.08-.04c-.02-.03-.03-.06-.02-.09l.59-2.24a3.038 3.038 0 0 1 2.93-2.27h21.83s.09.03.1.07l1.48 4.6s0 .08-.03.11l-22 22.1h20.88s.06.01.08.04c.02.03.03.06.02.09l-.59 2.24a3.038 3.038 0 0 1-2.93 2.27H39.21ZM71.1 94.64s-.09-.03-.1-.07l-1.48-4.6s0-.08.03-.11l22-22.1H71.06s-.06-.01-.08-.04c-.02-.03-.03-.06-.02-.09l.59-2.24a3.038 3.038 0 0 1 2.93-2.27h21.83s.09.03.1.07l1.48 4.6s0 .08-.03.11l-22 22.1h20.88s.06.01.08.04.03.06.02.09l-.59 2.24a3.038 3.038 0 0 1-2.93 2.27H71.09ZM228.56 94.64c-.06 0-.11-.05-.11-.11v-.63c0-5.28-.64-10.07-1.89-14.22-.99-3.27-2.36-6.16-4.08-8.58-1.57-2.21-3.17-3.64-4.23-4.44l-.45-.34-12.21 27.36c-.26.58-.84.96-1.48.96h-3.84c-.09 0-.15-.09-.11-.17l12.91-28.95s.05-.06.1-.06h2.88l1.86-4.18s.06-.09.1-.09h.05l.58.27c.4.18 3.97 1.92 7.46 6.73 2.05 2.83 3.68 6.18 4.84 9.96 1.43 4.64 2.15 9.94 2.15 15.75v.63c0 .06-.05.11-.11.11h-4.43ZM28.4 94.64c-.06 0-.11-.05-.11-.11v-.63c0-5.28-.64-10.07-1.89-14.22-.99-3.27-2.36-6.16-4.08-8.58-1.57-2.21-3.17-3.64-4.23-4.44l-.45-.34L5.43 93.68c-.26.58-.84.96-1.48.96H.12c-.09 0-.15-.09-.11-.17l12.91-28.95s.05-.06.1-.06h2.88l1.86-4.18s.06-.09.1-.09h.05l.58.27c.4.18 3.97 1.92 7.46 6.73 2.05 2.83 3.68 6.18 4.84 9.96 1.43 4.64 2.15 9.93 2.15 15.75v.63c0 .06-.05.11-.11.11H28.4Z"
            fill={'#242e63'}
          />
          <path
            d="M117.31 2.87h-1.6L98.69 41.02h1.6l17.02-38.15zM144.08 32.5c0-5.76-.72-11.01-2.14-15.62-1.16-3.78-2.8-7.15-4.87-10-3.49-4.82-7.15-6.65-7.66-6.89l-.6 1.33c.64.3 3.87 1.98 7.07 6.41 1.97 2.72 3.53 5.94 4.65 9.57 1.28 4.15 1.97 8.86 2.06 14v.46h-6.72l-.05-.39c-.42-3.5-1.11-6.81-2.05-9.85-1.4-4.54-3.36-8.57-5.84-11.99-.61-.84-1.26-1.66-1.94-2.43l-.19-.22 2.32-5.21h-1.6l-1.81 4.05-.46-.44c-2.88-2.76-5.26-3.9-5.52-4.02l-.19-.09-.59 1.33.18.08c.45.21 2.85 1.39 5.74 4.35l.21.22-11.63 26.06h22.1l.04.41c.16 1.78.25 3.61.28 5.46v.45h-25.25l-.65 1.46h27.37v-.73c0-2.23-.09-4.44-.28-6.57l-.04-.49h8.04v-.73Zm-29.36-.73 10.45-23.42.46.56c.39.48.77.98 1.14 1.48 2.38 3.29 4.27 7.18 5.62 11.56.88 2.87 1.54 6 1.96 9.31l.06.5h-19.7ZM125.75 43.58H97.54l-.65 1.46h28.21l.65-1.46zM105.54 48.74h27.13l.65-1.46H106.2l-.66 1.46zM111.11 52.44h10.68l.65-1.47h-10.68l-.65 1.47z"
            fill={'#a68142'}
          />
        </>
      )}

      {color !== 'white' ? null : (
        <path
          d="M78.91 118.45v-.06l3.72-9.44c.06-.14.17-.21.33-.22.07 0 .13 0 .2.03.1.04.17.1.19.19l3.7 9.42v.06l-.35.82c-.03.06-.12.06-.14 0l-1.22-3.26h-4.68l-1.26 3.27c-.02.06-.11.07-.14 0l-.35-.81Zm6.15-3.16-2.22-5.7-.04.03.15.42-2.03 5.25h4.15ZM98.07 109.24c0-.11.04-.2.11-.27s.17-.1.28-.1h4.59c.62 0 1.17.14 1.65.42.38.22.7.54.93.92.3.49.45 1.06.45 1.71 0 .93-.28 1.68-.83 2.24-.55.56-1.28.84-2.2.84h-4.22v3.59s0 .04-.02.05l-.61.66c-.05.05-.13.02-.13-.05v-10Zm4.98 5.07c.68 0 1.22-.22 1.64-.66.42-.44.63-1.02.63-1.74s-.21-1.26-.63-1.7c-.42-.44-.97-.66-1.63-.66h-4.22v4.76h4.22ZM117.35 109.53l.61-.66c.05-.05.13-.02.13.05v9.66s0 .04-.02.05l-.61.66c-.05.05-.13.02-.13-.05v-9.66s0-.04.02-.05ZM132.87 109.55h-3.8c-.07 0-.1-.08-.05-.13l.55-.53s.03-.02.05-.02h7.81c.07 0 .1.08.05.13l-.54.53s-.03.02-.05.02h-3.25v9.04s0 .04-.02.05l-.61.66c-.05.05-.13.02-.13-.05v-9.69ZM146.23 118.45v-.06l3.72-9.44c.06-.14.17-.21.33-.22.07 0 .13 0 .2.03.1.04.17.1.19.19l3.7 9.42v.06l-.35.82c-.03.06-.12.06-.14 0l-1.22-3.26h-4.68l-1.26 3.27c-.02.06-.11.07-.14 0l-.35-.81Zm6.15-3.16-2.22-5.7-.04.03.15.42-2.03 5.25h4.15ZM165.5 119.2a.34.34 0 0 1-.11-.25v-9.36s0-.04.02-.05l.61-.66c.05-.05.13-.02.13.05v9.69h5.13s.04 0 .05.02l.57.53c.05.05.02.13-.05.13h-6.07c-.11 0-.2-.03-.28-.1ZM67.05 117.46c-.28.41-.68.73-1.19.95-.51.23-1.08.34-1.73.34s-1.21-.11-1.71-.34c-.5-.22-.89-.54-1.17-.94-.28-.4-.42-.86-.42-1.38v-4.03c0-.52.14-.98.42-1.38.28-.4.67-.72 1.17-.94.5-.22 1.07-.34 1.71-.34s1.22.11 1.73.34c.51.23.9.55 1.19.95.26.38.4.81.42 1.29 0 .05.06.09.11.07l.56-.25s.05-.04.05-.07c0-.58-.18-1.09-.51-1.54-.34-.47-.82-.83-1.44-1.09-.62-.26-1.32-.39-2.1-.39s-1.49.14-2.1.42c-.62.28-1.1.68-1.44 1.19-.34.51-.51 1.08-.51 1.73v4.03c0 .65.17 1.22.51 1.73.34.51.82.9 1.44 1.19.62.28 1.32.42 2.1.42s1.49-.13 2.1-.39c.62-.26 1.1-.62 1.44-1.09.33-.45.5-.97.51-1.54 0-.03-.02-.06-.05-.07l-.56-.25s-.11.01-.11.07c-.02.48-.16.91-.42 1.29ZM117.51 94.2c-4.3 0-8.24-1.69-11.1-4.77-2.8-3.01-4.34-7.08-4.34-11.46V64.43c0-.89.72-1.61 1.61-1.61h2.9c.1 0 .27.08.33.14v15.01c0 3.17 1.08 6.09 3.03 8.24 1.94 2.12 4.41 3.15 7.57 3.15s5.64-1.03 7.57-3.15c1.95-2.14 3.03-5.07 3.03-8.24V64.43c0-.91.99-1.61 1.83-1.61h2.9c.06 0 .1.05.1.1v15.05c0 4.38-1.54 8.45-4.34 11.46-2.86 3.08-6.8 4.77-11.1 4.77ZM158.02 94.2s-.07-.02-.09-.05c-1.46-2.52-3.12-4.88-4.8-6.81a34.9 34.9 0 0 0-2.74-2.82 27.851 27.851 0 0 0-4.48-3.34c-.84-.5-1.79-.97-2.74-1.37l-.62-.26v14.54a.1.1 0 0 1-.1.1h-4.53a.1.1 0 0 1-.1-.1V74.23c0-.06.05-.1.1-.1h.55c.23 0 2.29.06 5.27 1.12 1.41.5 2.83 1.16 4.2 1.95 1.35.78 2.69 1.71 3.98 2.75.65.53 1.3 1.1 1.94 1.7l.75.71v-2.35c0-.06.04-.1.1-.1 4.13-.19 5.97-3.42 5.93-6.34-.02-1.6-.58-3.08-1.57-4.19-1.12-1.25-2.7-1.93-4.59-1.96h-10.22c-.89 0-1.61-.72-1.61-1.61v-2.9c0-.06.05-.1.1-.1h11.8c2.99 0 5.58 1.04 7.5 3.01 1.71 1.76 2.8 4.18 3.05 6.81.25 2.64-.35 5.23-1.7 7.3-1.41 2.16-3.57 3.64-6.24 4.28l-.7.17.46.55c2.16 2.58 4.25 5.73 6.02 9.11.02.03.02.07 0 .1s-.05.05-.09.05H158ZM190.06 94.2s-.07-.02-.09-.05c-1.46-2.52-3.12-4.88-4.8-6.81a33.33 33.33 0 0 0-2.74-2.82 27.851 27.851 0 0 0-4.48-3.34c-.84-.5-1.79-.97-2.74-1.37l-.62-.26v14.54a.1.1 0 0 1-.1.1h-4.53a.1.1 0 0 1-.1-.1V74.23c0-.06.05-.1.1-.1h.55c.23 0 2.29.06 5.27 1.12 1.41.5 2.83 1.16 4.2 1.95 1.35.78 2.69 1.71 3.98 2.75.65.53 1.3 1.1 1.94 1.7l.75.71v-2.35c0-.06.04-.1.1-.1 4.13-.19 5.97-3.42 5.93-6.34-.02-1.6-.58-3.08-1.57-4.19-1.12-1.25-2.7-1.93-4.59-1.96H176.3c-.89 0-1.61-.72-1.61-1.61v-2.9c0-.06.05-.1.1-.1h11.8c2.99 0 5.58 1.04 7.5 3.01 1.71 1.76 2.8 4.18 3.05 6.81.25 2.64-.35 5.23-1.7 7.3-1.41 2.16-3.57 3.64-6.24 4.28l-.7.17.46.55c2.16 2.58 4.25 5.73 6.02 9.11.02.03.02.07 0 .1s-.05.05-.09.05h-4.85ZM39.03 94.2s-.09-.03-.1-.07l-1.48-4.58s0-.08.03-.11l21.9-22H38.99s-.06-.01-.08-.04c-.02-.03-.03-.06-.02-.09l.58-2.23a3.026 3.026 0 0 1 2.92-2.26h21.73s.09.03.1.07l1.48 4.58s0 .08-.03.11l-21.9 22h20.79s.06.01.08.04c.02.03.03.06.02.09l-.58 2.23a3.026 3.026 0 0 1-2.92 2.26H39.04ZM70.77 94.2s-.09-.03-.1-.07l-1.48-4.58s0-.08.03-.11l21.9-22H70.73s-.06-.01-.08-.04c-.02-.03-.03-.06-.02-.09l.58-2.23a3.026 3.026 0 0 1 2.92-2.26h21.73s.09.03.1.07l1.48 4.58s0 .08-.03.11l-21.9 22H96.3s.06.01.08.04.03.06.02.09l-.58 2.23a3.026 3.026 0 0 1-2.92 2.26H70.78ZM227.49 94.2a.1.1 0 0 1-.1-.1v-.63c0-5.26-.63-10.02-1.89-14.15-.99-3.26-2.35-6.13-4.07-8.54-1.57-2.2-3.15-3.62-4.21-4.42l-.45-.34-12.15 27.24c-.26.58-.84.95-1.47.95h-3.82c-.09 0-.15-.09-.11-.17l12.85-28.81s.05-.06.1-.06h2.86l1.86-4.16s.06-.09.1-.09h.05l.58.27c.39.18 3.96 1.91 7.42 6.7 2.04 2.82 3.66 6.15 4.82 9.91 1.42 4.61 2.14 9.89 2.14 15.68v.63a.1.1 0 0 1-.1.1h-4.41ZM28.27 94.2a.1.1 0 0 1-.1-.1v-.63c0-5.26-.63-10.02-1.89-14.15-.99-3.26-2.35-6.13-4.07-8.54-1.57-2.2-3.15-3.62-4.21-4.42l-.45-.34L5.4 93.26c-.26.58-.84.95-1.47.95H.12c-.09 0-.15-.09-.11-.17l12.85-28.81s.05-.06.1-.06h2.86l1.86-4.16s.06-.09.1-.09h.05l.58.27c.39.18 3.96 1.91 7.42 6.7 2.04 2.82 3.66 6.15 4.82 9.91 1.42 4.61 2.14 9.89 2.14 15.68v.63a.1.1 0 0 1-.1.1h-4.41ZM116.76 2.86h-1.59L98.22 40.82h1.6l16.94-37.96zM143.41 32.35c0-5.73-.72-10.96-2.13-15.54-1.16-3.77-2.79-7.11-4.84-9.95-3.47-4.8-7.11-6.62-7.63-6.86l-.59 1.33c.64.3 3.85 1.97 7.04 6.38 1.96 2.71 3.52 5.91 4.63 9.52 1.27 4.13 1.96 8.82 2.05 13.94v.45h-6.69l-.05-.39c-.42-3.48-1.11-6.78-2.04-9.8-1.39-4.52-3.35-8.53-5.81-11.94-.61-.84-1.26-1.65-1.93-2.42l-.19-.22 2.31-5.18h-1.59l-1.8 4.04-.46-.44c-2.87-2.75-5.23-3.88-5.49-4l-.19-.09-.59 1.33.18.08c.45.21 2.83 1.39 5.71 4.33l.21.22-11.58 25.94h22l.04.41c.16 1.77.25 3.6.28 5.43v.45h-25.13l-.65 1.45h27.24v-.73c0-2.22-.09-4.42-.28-6.54l-.04-.48h8v-.73Zm-29.22-.73L124.6 8.31l.46.56c.39.48.77.97 1.14 1.48 2.37 3.27 4.25 7.15 5.6 11.51.88 2.86 1.54 5.98 1.95 9.27l.06.5H114.2ZM125.16 43.38H97.08l-.64 1.45h28.07l.65-1.45zM105.05 48.51h27l.65-1.45h-27l-.65 1.45zM110.59 52.19h10.62l.65-1.45h-10.62l-.65 1.45z"
          fill="#ffffff"
        />
      )}
    </svg>
  );
};

export default AzzurraBrand;
