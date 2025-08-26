import { MD2PDFConfig } from '../types';

const config: MD2PDFConfig = {
  stylesheet: "./pdf-configs/style.css",
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  launch_options: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  pdf_options: {
    format: 'A4',
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    },
    printBackground: true,
    headerTemplate: `<style>
  section {
    margin: 0 auto;
    font-size: 9px;
  }
</style>`,
    footerTemplate: `<section>
  <div>
    <span class="pageNumber"></span>
    / <span class="totalPages"></span>
  </div>
</section>`
  },
  stylesheet_encoding: "utf-8",
};

export = config;