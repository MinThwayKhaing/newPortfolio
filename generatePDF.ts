
import { jsPDF } from "jspdf";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS, STATS } from "./constants";

export const generateResume = () => {
  const doc = new jsPDF();
  
  // -- DIMENSIONS & COLORS --
  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 15;
  const leftColWidth = 50; 
  const rightColX = margin + leftColWidth + 5; 
  const contentWidth = pageWidth - rightColX - margin;
  
  // Colors
  const COLOR_HEADER_BG = "#f1f5f9"; // Very light slate/blue
  const COLOR_TEXT_MAIN = "#0f172a"; // Slate 900
  const COLOR_TEXT_LIGHT = "#475569"; // Slate 600
  const COLOR_ACCENT_LINE = "#0ea5e9"; // Sky 500


  let yPos = 0;

  // -- HELPERS --
  
  const checkPageBreak = (heightNeeded: number) => {
    if (yPos + heightNeeded > pageHeight - margin) {
      doc.addPage();
      yPos = margin + 10; 
    }
  };

  const drawSeparator = (y: number) => {
    doc.setDrawColor(COLOR_ACCENT_LINE);
    doc.setLineWidth(1.2); // Thicker line
    doc.line(margin, y, margin + 25, y); 
    
    doc.setLineWidth(0.3);
    doc.setDrawColor(200, 200, 200); 
    doc.line(margin + 25, y, pageWidth - margin, y);
  };

  // --- 1. TOP HEADER BAR ---
  doc.setFillColor(COLOR_HEADER_BG);
  doc.rect(0, 0, pageWidth, 28, 'F');

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(COLOR_TEXT_MAIN);

  // Contact info
  const contactText = `${PROFILE.location}   |   ${PROFILE.phone}   |   ${PROFILE.email}`;
  const textWidth = doc.getTextWidth(contactText);
  doc.text(contactText, (pageWidth - textWidth) / 2, 12);

  const socialText = "LinkedIn   |   GitHub   |   Portfolio";
  const socialWidth = doc.getTextWidth(socialText);
  doc.text(socialText, (pageWidth - socialWidth) / 2, 20);
  
  // Links for social
  const startX = (pageWidth - socialWidth) / 2;
  doc.link(startX, 20 - 3, doc.getTextWidth("LinkedIn"), 4, { url: PROFILE.linkedin });
  doc.link(startX + doc.getTextWidth("LinkedIn   |   "), 20 - 3, doc.getTextWidth("GitHub"), 4, { url: PROFILE.github });
  doc.link(startX + doc.getTextWidth("LinkedIn   |   GitHub   |   "), 20 - 3, doc.getTextWidth("Portfolio"), 4, { url: PROFILE.portfolio });

  yPos = 45;

  // --- 2. NAME & ROLE ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(COLOR_TEXT_MAIN);
  const nameWidth = doc.getTextWidth(PROFILE.name.toUpperCase());
  doc.text(PROFILE.name.toUpperCase(), (pageWidth - nameWidth) / 2, yPos);
  
  yPos += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(COLOR_TEXT_LIGHT);
  const roleWidth = doc.getTextWidth(PROFILE.role);
  doc.text(PROFILE.role, (pageWidth - roleWidth) / 2, yPos);

  yPos += 15;

  // --- 3. SECTIONS ---

  const renderSection = (title: string[], contentCallback: () => void) => {
    checkPageBreak(30); 
    drawSeparator(yPos);
    yPos += 8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(COLOR_TEXT_MAIN);
    
    title.forEach((line, i) => {
      doc.text(line.toUpperCase(), margin, yPos + (i * 5));
    });

    contentCallback();
    yPos += 8;
  };

  // === WEBSITES / PROFILES ===
  renderSection(["WEBSITES,", "PORTFOLIOS,", "PROFILES"], () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(COLOR_TEXT_MAIN);
    
    const items = [
      { label: "LinkedIn", url: PROFILE.linkedin },
      { label: "GitHub", url: PROFILE.github },
      { label: "Portfolio", url: PROFILE.portfolio }
    ];

    items.forEach(item => {
      doc.text("• " + item.label + ":", rightColX, yPos);
      doc.setTextColor(COLOR_ACCENT_LINE);
      doc.textWithLink(item.url, rightColX + 25, yPos, { url: item.url });
      doc.setTextColor(COLOR_TEXT_MAIN);
      yPos += 6;
    });
  });

  // === SUMMARY ===
  renderSection(["PROFESSIONAL", "SUMMARY"], () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(COLOR_TEXT_MAIN);
    const lines = doc.splitTextToSize(PROFILE.summary, contentWidth);
    doc.text(lines, rightColX, yPos);
    yPos += (lines.length * 5) + 4;
    doc.setFont("helvetica", "bold");
    doc.text(`Exp: ${STATS.yearsOfExperience} Years | Projects: ${STATS.totalProjects}`, rightColX, yPos);
    yPos += 5;
  });

  // === WORK HISTORY ===
  renderSection(["WORK HISTORY"], () => {
    EXPERIENCE.forEach((job) => {
      checkPageBreak(30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(COLOR_TEXT_MAIN);

      const dateWidth = doc.getTextWidth(job.period);
      const maxRoleWidth = contentWidth - dateWidth - 5;
      const roleLines = doc.splitTextToSize(job.role.toUpperCase(), maxRoleWidth);
      
      doc.text(roleLines, rightColX, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(job.period, pageWidth - margin - dateWidth, yPos);
      
      yPos += (roleLines.length * 5);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(COLOR_TEXT_LIGHT); 
      doc.text(job.company + " | " + job.location, rightColX, yPos);
      yPos += 6;

      doc.setFont("helvetica", "normal");
      doc.setTextColor(COLOR_TEXT_MAIN);
      doc.setFontSize(10);
      job.description.forEach((desc) => {
        const bulletLines = doc.splitTextToSize(`• ${desc}`, contentWidth);
        checkPageBreak(bulletLines.length * 5);
        doc.text(bulletLines, rightColX, yPos);
        yPos += (bulletLines.length * 5);
      });
      yPos += 6; 
    });
  });

  // === PROJECTS ===
  renderSection(["FEATURED", "PROJECTS"], () => {
     PROJECTS.slice(0, 6).forEach((proj) => {
        checkPageBreak(25);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text(proj.name, rightColX, yPos);
        yPos += 5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        const descLines = doc.splitTextToSize(proj.description, contentWidth);
        doc.text(descLines, rightColX, yPos);
        yPos += (descLines.length * 5);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.setTextColor(COLOR_TEXT_LIGHT);
        doc.text(`Stack: ${proj.techStack.join(", ")}`, rightColX, yPos);
        yPos += 8;
        doc.setTextColor(COLOR_TEXT_MAIN);
     });
  });

  // === CERTIFICATIONS ===
  renderSection(["CERTIFICATIONS"], () => {
    CERTIFICATIONS.forEach((cert) => {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(cert.name, rightColX, yPos);
      yPos += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(COLOR_TEXT_LIGHT);
      doc.text(cert.issuer, rightColX, yPos);
      if (cert.link) {
        doc.link(rightColX, yPos - 10, contentWidth, 12, { url: cert.link });
      }
      yPos += 8;
      doc.setTextColor(COLOR_TEXT_MAIN);
    });
  });

  // === SKILLS ===
  renderSection(["SKILLS"], () => {
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));
    categories.forEach((cat) => {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(cat.toUpperCase() + ":", rightColX, yPos);
      const skillsInCat = SKILLS.filter(s => s.category === cat).map(s => s.name).join(", ");
      doc.setFont("helvetica", "normal");
      const skillLines = doc.splitTextToSize(skillsInCat, contentWidth - 30);
      doc.text(skillLines, rightColX + 30, yPos);
      yPos += (skillLines.length * 5) + 3;
    });
  });

  // === EDUCATION ===
  renderSection(["EDUCATION"], () => {
    EDUCATION.forEach((edu) => {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(edu.degree, rightColX, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(edu.year, pageWidth - margin - doc.getTextWidth(edu.year), yPos);
      yPos += 5;
      doc.setTextColor(COLOR_TEXT_LIGHT);
      doc.text(`${edu.institution} | ${edu.location}`, rightColX, yPos);
      yPos += 8;
      doc.setTextColor(COLOR_TEXT_MAIN);
    });
  });

  doc.save("Minn_Thway_Khaing_Resume.pdf");
};
