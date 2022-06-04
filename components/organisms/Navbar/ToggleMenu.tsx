export default function ToggleMenu() {
  const onClick = () => {
    document.querySelector('#hamburger')?.classList.toggle('hamburger-active');
    document.querySelector('#nav-menu')?.classList.toggle('hidden');
  };

  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className="block absolute right-4 lg:hidden"
      onClick={onClick}
    >
      <span className="hamburger-line transition-all duration-300 ease-in-out origin-top-left" />
      <span className="hamburger-line transition-all duration-300 ease-in-out" />
      <span className="hamburger-line transition-all duration-300 ease-in-out origin-bottom-left" />
    </button>
  );
}
