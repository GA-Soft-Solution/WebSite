// src/data/memberSocialLinks.js
import Linkedin from "/images/linkdin.png";
import Facebook from "/images/facebook.png";
import Messenger from "/images/messenger.png";
import Github from "/images/Vector.png";
import X from "/images/x.png";

// Export a function that takes formData and returns social links
const getMemberSocialLinks = (formData) => [
  formData.facebook && { icon: Facebook, href: formData.facebook, label: "Facebook" },
  formData.twitter && { icon: X, href: formData.twitter, label: "Twitter" },
  formData.linkedin && { icon: Linkedin, href: formData.linkedin, label: "LinkedIn" },
  formData.whatsapp && { icon: Messenger, href: formData.whatsapp, label: "WhatsApp" },
  formData.github && { icon: Github, href: formData.github, label: "Github" },
].filter(Boolean);

export default getMemberSocialLinks;