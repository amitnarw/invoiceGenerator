declare module 'html2pdf.js' {
    interface HTML2PDFOptions {
        margin?: number;
        filename?: string;
        image?: { type?: string; quality?: number };
        html2canvas?: { scale?: number };
        jsPDF?: { unit?: string; format?: string; orientation?: string };
    }

    interface HTML2PDFInstance {
        from(element: HTMLElement | string): {
            save(): void;
        };
    }

    const html2pdf: (options?: HTML2PDFOptions) => HTML2PDFInstance;
    export default html2pdf;
}