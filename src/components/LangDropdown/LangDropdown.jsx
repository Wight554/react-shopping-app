import React from 'react';

const displayName = 'LangDropdown';

export default function LangDropdown() {
  return (
    <select>
      <option>en</option>
      <option>uk</option>
    </select>
  );
}

LangDropdown.displayName = displayName;
