import type { ReactNode } from 'react';
import styles from './Section.module.css';
import { COLORS, COLORS_TEXT_TITLE, PADDINGS } from './Section.const';
import Container from '../shared/Container';

interface IProps {
  children: ReactNode;
  paddingSizeType: 'lg' | 'md' | 'sm' | 's';
  colorType: 'ultralight' | 'light' | 'dark';
  title?: {
    text: string;
    marginBottom: string;
  };
}

export default function Section(props: IProps) {
  const stylesSection = {
    padding: PADDINGS[props.paddingSizeType],
    backgroundColor: COLORS[props.colorType],
  };
  const stylesTitle = {
    color: COLORS_TEXT_TITLE[props.colorType],
    marginBottom: props.title ? props.title.marginBottom : undefined,
  };

  return (
    <section className={styles.section} style={stylesSection}>
      <Container>
        {props.title && (
          <h3 className={styles.section__title} style={stylesTitle}>
            {props.title.text}
          </h3>
        )}

        {props.children}
      </Container>
    </section>
  );
}
