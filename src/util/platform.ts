type OperatingSystem = 'unknown' | 'windows' | 'mac';
type Browser = 'unknown' | 'chrome' | 'firefox' | 'safari' | 'opera' | 'msie';

type Platform = {
  os: OperatingSystem
  browser: Browser
  platform: string
}

const getOperatingSystem = (): OperatingSystem => {
  switch (window.navigator.platform) {
    case 'MacIntel': return 'mac';
    case 'Win32': return 'windows';
    default: return 'unknown';
  }
};

const getBrowser = (): Browser => {
  if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    return 'opera';
  } else if (window.navigator.userAgent.indexOf('MSIE') !== -1) {
    return 'msie';
  } else if (window.navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'chrome';
  } else if (window.navigator.userAgent.indexOf('Safari') !== -1) {
    return 'safari';
  } else if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'firefox';
  }
  return 'unknown'
};

export const getPlatform = (): Platform => {
  return {
    os: getOperatingSystem(),
    browser: getBrowser(),
    platform: window.navigator.platform,
  }
};