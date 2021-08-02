"use strict";
(self["webpackChunktw_events"] = self["webpackChunktw_events"] || []).push([["main"],{

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _imgs_spinner_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/spinner.svg */ "./src/imgs/spinner.svg");
/* harmony import */ var _home_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/index.jsx */ "./src/home/index.jsx");
/* harmony import */ var _edition_list_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edition/list.jsx */ "./src/edition/list.jsx");
/* harmony import */ var _edition_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edition/index.jsx */ "./src/edition/index.jsx");









const renderLoader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
  src: _imgs_spinner_svg__WEBPACK_IMPORTED_MODULE_3__.default,
  alt: "Loading"
});

const renderError = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Something went wrong");

const App = () => {
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch("./app.json").then(res => res.json()).then(result => {
      setIsLoaded(true);
      setConfig(result);
    }, error => {
      setIsLoaded(false);
      setError(error);
    });
  }, []);
  if (!isLoaded) return renderLoader();

  if (error || !config.name) {
    return renderError();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_index_jsx__WEBPACK_IMPORTED_MODULE_4__.Home, {
    config: config
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/edition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edition_index_jsx__WEBPACK_IMPORTED_MODULE_6__.EditionDetails, {
    config: config
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edition_list_jsx__WEBPACK_IMPORTED_MODULE_5__.PastEditions, {
    config: config
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
    to: "/"
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/edition/card.jsx":
/*!******************************!*\
  !*** ./src/edition/card.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditionCard": function() { return /* binding */ EditionCard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/edition/index.scss");




class EditionCard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const edition = this.props.edition;
    const type = edition.type || "TALK";
    const title = edition.title || `EDITION ${edition.id} `;
    const startTime = new Date(edition.startTime);
    const endTime = new Date(edition.endTime);
    const formattedDate = startTime.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    const duration = Math.abs(startTime - endTime) / 36e5;
    const sessions = (edition === null || edition === void 0 ? void 0 : edition.sessions) || [];
    const sessionCount = (sessions === null || sessions === void 0 ? void 0 : sessions.length) || 0;

    const getTalksCount = sessions => {
      let count = 0;
      sessions.map(session => count += session.talks.length);
      return count;
    };

    const talksCount = getTalksCount(sessions) || 0;
    const bannerId = isNaN(edition.id % 5) ? 0 : edition.id % 5;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      key: edition.id,
      className: `editionCard event-bg-${bannerId}`,
      to: `./edition?editionId=${edition.id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "type"
    }, type.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "title"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "date"
    }, "Edition ", edition.id, " | ", formattedDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "value"
    }, String(talksCount).padStart(2, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, talksCount > 1 ? "Talks" : "Talk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "value"
    }, String(sessionCount).padStart(2, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, sessionCount > 1 ? "Sessions" : "Session")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "value"
    }, String(duration).padStart(2, "0"), " ", duration > 1 ? "hrs" : "hr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Duration"))))));
  }

}
EditionCard.propTypes = {
  edition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};

/***/ }),

/***/ "./src/edition/index.jsx":
/*!*******************************!*\
  !*** ./src/edition/index.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditionDetails": function() { return /* binding */ EditionDetails; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_banner_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/banner/index.jsx */ "./src/home/banner/index.jsx");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/edition/index.scss");






class EditionDetails extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const event = this.props.config;
    document.title = `${event.name} ${event.location}`;
  }

  render() {
    const event = this.props.config;
    const editionId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getParamValueFromURL)("editionId") || 1;
    const editions = event.editions;
    const edition = editions.find(e => e.id === Number(editionId));
    if (!edition) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Edition not found");
    const title = edition.title || `EDITION ${edition.id} `;
    const startTime = new Date(edition.startTime);
    const sessions = (edition === null || edition === void 0 ? void 0 : edition.sessions) || [];
    const talks = (sessions === null || sessions === void 0 ? void 0 : sessions.map(session => session.talks).flat()) || [];

    const renderEditionInfo = () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "basicInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "date"
      }, "Edition ", edition.id, " | ", (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getFormattedDate)(startTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "title"
      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "stats"
      }, sessions.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, String(sessions.length).padStart(2, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Sessions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, String(talks.length).padStart(2, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, talks.length > 1 ? "Talks" : "Talk"))));
    };

    const renderTalksInfo = () => {
      const renderSpeakerInfo = speakers => {
        const renderSpeaker = speaker => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
          className: "pic",
          src: speaker.profilePicture,
          alt: speaker.name,
          loading: "lazy"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "info"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "name"
        }, speaker.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "desgination"
        }, speaker.desgination)));

        if (speakers && speakers.length == 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "speakerInfo"
          }, renderSpeaker(speakers[0]));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "speakers"
        }, speakers && speakers.map((speaker, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: index,
          className: "speaker"
        }, renderSpeaker(speaker))));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "talks"
      }, talks && talks.map((talk, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        className: "talk"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "talkInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "talk-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "bold"
      }, (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.padZeros)(index + 1, 2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "light"
      }, "/", (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.padZeros)(talks.length, 2), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "bold"
      }, talk.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "timeSlot light"
      }, talk.startTime && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getLocalTime)(new Date(talk.startTime)), talk.startTime && talk.endTime && ` - ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getLocalTime)(new Date(talk.endTime))}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "description"
      }, talk.description), talk.speakers && renderSpeakerInfo(talk.speakers), talk.recording && talk.slides && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "slides",
        target: "_blank",
        rel: "noreferrer",
        href: talk.slides
      }, "View presentation"))), (talk.recording || talk.slides) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
        src: talk.recording ? talk.recording : talk.slides,
        width: "560",
        height: "315",
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        mozallowfullscreen: "true",
        webkitallowfullscreen: "true"
      }))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "event-home",
      className: "event-home"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_banner_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Banner, {
      event: event,
      small: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "view-all"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      to: "./list"
    }, "< Back to all editions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "editionDetails"
    }, renderEditionInfo(), renderTalksInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "copyright"
    }, "\xA9 2021 Thoughtworks, Inc."));
  }

}
EditionDetails.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

/***/ }),

/***/ "./src/edition/list.jsx":
/*!******************************!*\
  !*** ./src/edition/list.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastEditions": function() { return /* binding */ PastEditions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_banner_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/banner/index.jsx */ "./src/home/banner/index.jsx");
/* harmony import */ var _card_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.jsx */ "./src/edition/card.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/edition/index.scss");





class PastEditions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const event = this.props.config;
    document.title = `${event.name} ${event.location}`;
  }

  render() {
    const event = this.props.config;

    const renderEditions = () => {
      const editions = event.editions;
      const pastEditions = editions.filter(edition => edition.endTime < new Date().valueOf());
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "editions",
        className: "recentEditions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "banner"
      }, `All Editions (${pastEditions.length})`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "editions"
      }, pastEditions.map(edition => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card_jsx__WEBPACK_IMPORTED_MODULE_3__.EditionCard, {
          key: edition.id,
          edition: edition
        });
      })));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "event-home",
      className: "event-home"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_banner_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Banner, {
      event: event,
      small: true
    }), renderEditions(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "copyright"
    }, "\xA9 2021 Thoughtworks, Inc."));
  }

}
PastEditions.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};

/***/ }),

/***/ "./src/home/banner/index.jsx":
/*!***********************************!*\
  !*** ./src/home/banner/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Banner": function() { return /* binding */ Banner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talks_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./talks.jsx */ "./src/home/banner/talks.jsx");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils.js */ "./src/utils.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/home/banner/index.scss");






class Banner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const event = this.props.event;
    const smallBanner = this.props.small;
    if (!event || !event.editions || event.editions <= 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null);
    const upcomingEditions = event.editions.filter(edition => edition.startTime > new Date().valueOf());
    const bannerStatus = upcomingEditions.length > 0 ? "active" : "inactive";
    const pastEditions = event.editions.filter(edition => edition.endTime < new Date().valueOf());

    const getMaxEdition = editions => {
      return Math.max(...editions.map(edition => edition.id));
    };

    const getTalksCount = editions => {
      let talksCount = 0;
      editions.forEach(edition => {
        edition.sessions.forEach(session => {
          talksCount += session.talks.length;
        });
      });
      return talksCount;
    };

    const renderMenuBar = (name, location) => {
      const links = ["Contact Us", "About Us", "Collaborate", "Editions"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "topnav"
      }, links.map(item => {
        const link = `#${item.replace(/\s+/g, "").trim().toLowerCase()}`;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          key: item,
          className: "item link",
          href: link
        }, item);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "item logo",
        to: "./"
      }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item location"
      }, location));
    };

    const renderTaglines = tagLines => {
      return tagLines.map(tagLine => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          key: tagLine,
          className: "tagLine"
        }, tagLine);
      });
    };

    const renderEventStats = () => {
      const editionsCount = getMaxEdition(pastEditions);
      const talksCount = getTalksCount(pastEditions);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "stats"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, editionsCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, talksCount > 1 ? "EDITIONS" : "EDITION"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, talksCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, talksCount > 1 ? "TALKS" : "TALK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, "1000+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, "MEMBERS"))));
    };

    const renderEditionStats = edition => {
      const editionDate = new Date(edition.startTime);
      const editionDay = editionDate.toLocaleString("en-IN", {
        day: "numeric"
      });
      const talksCount = getTalksCount([edition]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "stats"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, talksCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, talksCount > 1 ? "TALKS" : "TALK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "value"
      }, editionDay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "text"
      }, (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getOrdinalNum)(editionDay))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, editionDate.toLocaleString("en-IN", {
        month: "short"
      }).toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "value"
      }, editionDate.getHours() % 12, " :", " ", (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.padZeros)(editionDate.getMinutes(), 2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, editionDate.getHours() < 12 ? "AM" : "PM"))));
    };

    const renderEventInfo = () => {
      if (bannerStatus === "inactive") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "eventInfo"
        }, !smallBanner && event.tagLines && renderTaglines(event.tagLines), !smallBanner && renderEventStats());
      }

      const upcomingEdition = upcomingEditions[0];
      const upcomingEditionDate = new Date(upcomingEdition.startTime);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: `upcomingEditionInfo ${smallBanner ? "small" : ""}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "basicInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "summary"
      }, "UPCOMING | EDITION ", upcomingEdition.id, " |", " ", upcomingEditionDate.toLocaleString("en-IN", {
        weekday: "long"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title"
      }, upcomingEdition.title)), upcomingEdition.registration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "rsvp"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "link",
        href: upcomingEdition.registration.link,
        target: "_blank",
        rel: "noreferrer"
      }, "RSVP now")), !smallBanner && renderEditionStats(upcomingEdition), !smallBanner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_talks_jsx__WEBPACK_IMPORTED_MODULE_2__.Talks, {
        sessions: upcomingEdition.sessions
      }));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "banner",
      className: `banner ${bannerStatus}`
    }, renderMenuBar(event.name, event.location), renderEventInfo());
  }

}
Banner.defaultProps = {
  small: false
};
Banner.propTypes = {
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  small: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./src/home/banner/talks.jsx":
/*!***********************************!*\
  !*** ./src/home/banner/talks.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Talks": function() { return /* binding */ Talks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


class Talks extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      talksCount: 0
    };
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    const currentIndex = this.state.index;
    this.setState(() => ({
      index: currentIndex - 1
    }));
  }

  handleNext() {
    const currentIndex = this.state.index;
    this.setState(() => ({
      index: currentIndex + 1
    }));
  }

  componentDidMount() {
    let talks = [];
    this.props.sessions.forEach(session => {
      const sessionTalks = session.talks;
      talks = [...talks, ...sessionTalks];
    });
    this.setState(() => ({
      talksCount: talks.length,
      talks: talks
    }));
  }

  render() {
    if (!this.state.talks || this.state.talksCount <= 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null);
    const {
      index,
      talksCount
    } = this.state;
    const talk = this.state.talks[index];
    const talkId = index + 1;
    const startTime = new Date(talk.startTime);
    const endTime = new Date(talk.endTime);

    const getLocalTime = date => date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });

    const renderTalkInfo = talk => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "talkInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "talk-title"
    }, talk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "timeSlot"
    }, getLocalTime(startTime), " - ", getLocalTime(endTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "description"
    }, talk.description));

    const renderSpeakerInfo = speakers => {
      const renderSpeaker = speaker => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: "pic",
        src: speaker.profilePicture,
        alt: speaker.name,
        loading: "lazy"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "name"
      }, speaker.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "desgination"
      }, speaker.desgination)));

      if (speakers && speakers.length == 1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "speakerInfo"
        }, renderSpeaker(speakers[0]));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "speakers"
      }, speakers && speakers.map((speaker, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        className: "speaker"
      }, renderSpeaker(speaker))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "talks"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: `talk-${index}`,
      className: "talk"
    }, renderTalkInfo(talk), renderSpeakerInfo(talk.speakers), talksCount > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "bold"
    }, String(talkId).padStart(2, "0"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "light"
    }, "/ ", String(talksCount).padStart(2, "0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      id: "prev",
      alt: "Previous talk",
      disabled: index == 0,
      onClick: this.handlePrevious
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      id: "next",
      alt: "Next talk",
      disabled: index == talksCount - 1,
      onClick: this.handleNext
    }))));
  }

}
Talks.propTypes = {
  sessions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};

/***/ }),

/***/ "./src/home/index.jsx":
/*!****************************!*\
  !*** ./src/home/index.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/index.jsx */ "./src/home/banner/index.jsx");
/* harmony import */ var _recent_editions_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent-editions.jsx */ "./src/home/recent-editions.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/home/index.scss");





class Home extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const event = this.props.config;
    document.title = `${event.name} ${event.location}`;
  }

  render() {
    const event = this.props.config;

    const renderWave = (invert = false) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: `wave-seperator ${invert ? "invert" : ""}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1200 120",
        preserveAspectRatio: "none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
        className: "shape-fill"
      })));
    };

    const renderCollaborate = () => {
      const renderSubmitButton = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "submit-talk-button",
        target: "_blank",
        rel: "noreferrer",
        href: event.submitTalk
      }, "Submit your talk"));

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "collaborate"
      }, renderWave(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title"
      }, "Collaborate with us and present in the community"), renderSubmitButton()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item steps"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "step write"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "img pen"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, "Build your talk and write an abstract within 200 words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "step submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "img file"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, "Share the abstract with us by filling our form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "step contact"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "img contact-us"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "text"
      }, "We will reach out you to take this further"))), renderSubmitButton(), renderWave(true));
    };

    const renderAboutUs = () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "aboutus"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "title"
      }, "What\u2019s ", event.name, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "description"
      }, event.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "feedback-que"
      }, "Have you attended a ", event.name, " event before?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "feedback-link",
        target: "_blank",
        rel: "noreferrer",
        href: event.feedback
      }, "Tell us how it was?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "background"
      }));
    };

    const renderFooter = () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "footer"
      }, renderWave(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        id: "contactus",
        className: "bold"
      }, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "E-Mail us at:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: `mailto:${event.contact.email}`
      }, event.contact.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item social-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "bold"
      }, "Follow us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), event.socialLinks && event.socialLinks.map(socialLink => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          title: socialLink.name,
          key: socialLink.name,
          className: socialLink.name,
          target: "_blank",
          rel: "noreferrer",
          href: socialLink.link
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "copyright"
      }, "\xA9 2021 Thoughtworks, Inc."));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "event-home",
      className: "event-home"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_banner_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Banner, {
      event: event
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_recent_editions_jsx__WEBPACK_IMPORTED_MODULE_3__.RecentEditions, {
      editions: event.editions
    }), renderCollaborate(), renderAboutUs(), renderFooter());
  }

}
Home.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};

/***/ }),

/***/ "./src/home/recent-editions.jsx":
/*!**************************************!*\
  !*** ./src/home/recent-editions.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentEditions": function() { return /* binding */ RecentEditions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edition_card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edition/card.jsx */ "./src/edition/card.jsx");




class RecentEditions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editions = this.props.editions;
    const pastEditions = editions.filter(edition => edition.endTime < new Date().valueOf());
    const recentEditions = pastEditions.slice(0, 4);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "editions",
      className: "recentEditions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "banner"
    }, "Recent Editions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "view-all",
      to: "./list"
    }, "View All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "editions"
    }, recentEditions.map(edition => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edition_card_jsx__WEBPACK_IMPORTED_MODULE_2__.EditionCard, {
        key: edition.id,
        edition: edition
      });
    })));
  }

}
RecentEditions.propTypes = {
  editions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.scss ***!
  \***************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1vmax;\n}\n\na {\n  text-decoration: none;\n}\n\n.wave-seperator svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 7vmax;\n}\n.wave-seperator .shape-fill {\n  fill: white;\n}\n\n.wave-seperator.invert {\n  transform: rotate(180deg);\n}\n\n.wave-seperator.invert svg {\n  transform: rotateY(180deg);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/edition/index.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/edition/index.scss ***!
  \*************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/event-bg-0.png */ "./src/imgs/event-bg-0.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/event-bg-1.png */ "./src/imgs/event-bg-1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/event-bg-2.png */ "./src/imgs/event-bg-2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/event-bg-3.png */ "./src/imgs/event-bg-3.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/event-bg-4.png */ "./src/imgs/event-bg-4.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".editionCard {\n  color: white;\n  margin: 0.5em;\n  padding-bottom: 0.5em;\n  flex-basis: 23%;\n  min-width: 20vmax;\n  min-height: 13vmax;\n}\n.editionCard .type {\n  padding-top: 0.3em;\n  padding-bottom: 0.3em;\n  padding-left: 0.6em;\n  padding-right: 0.6em;\n  background-color: black;\n  font-size: 0.85vmax;\n}\n.editionCard .details .title {\n  display: flex;\n  height: 5vmax;\n  padding-top: 0.5em;\n  padding-left: 1.5em;\n  padding-right: 1em;\n}\n.editionCard .details .date {\n  font-size: 1vmax;\n  padding-left: 1.5em;\n  padding-right: 1em;\n  padding-bottom: 0.7em;\n}\n.editionCard .details .info:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.editionCard .details .info {\n  font-size: 0.85vmax;\n  display: block;\n  color: #616264;\n  margin-left: 1.5em;\n  margin-right: 1.5em;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  background-color: white;\n  border-radius: 4px;\n}\n.editionCard .details .info .item {\n  align-items: center;\n  text-align: center;\n  float: left;\n  width: 33.33%;\n}\n.editionCard .details .info .item .value {\n  font-weight: 600;\n}\n.editionCard .details .info .separator {\n  float: left;\n  background-color: #707070;\n  height: calc(2vmax);\n  width: 0.1em;\n}\n\n.event-bg-0 {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.event-bg-1 {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.event-bg-2 {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.event-bg-3 {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.event-bg-4 {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.view-all {\n  margin: 1.5vmax;\n}\n\n.editionDetails {\n  margin: 1.5vmax;\n}\n.editionDetails .basicInfo .item {\n  display: inline-block;\n  width: 75%;\n}\n.editionDetails .basicInfo .item .title {\n  font-size: 2.5vmax;\n}\n.editionDetails .basicInfo .stats {\n  float: right;\n}\n.editionDetails .basicInfo .stats .item {\n  float: right;\n  text-align: center;\n  color: white;\n  background-color: black;\n  opacity: 0.4;\n  padding: 8px;\n  width: fit-content;\n}\n.editionDetails .basicInfo .stats .item .value {\n  font-weight: 600;\n}\n.editionDetails .basicInfo .stats .item + .item {\n  margin-right: 12px;\n}\n.editionDetails .talks {\n  margin-top: 2vmax;\n}\n.editionDetails .talks .talk {\n  color: black;\n  background-color: #e1e2e3;\n  padding: 1vmax;\n  padding-left: 2vmax;\n  padding-right: 2vmax;\n  margin-bottom: 1vmax;\n  border-radius: 6px;\n  min-height: 320px;\n}\n.editionDetails .talks .talk .talkInfo {\n  display: inline-block;\n  vertical-align: top;\n  width: 60%;\n}\n@media only screen and (min-width: 1025px) {\n  .editionDetails .talks .talk .talkInfo {\n    width: calc(95% - 560px);\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 1024px) {\n  .editionDetails .talks .talk .talkInfo {\n    width: 90%;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .editionDetails .talks .talk .talkInfo {\n    width: 90%;\n  }\n}\n.editionDetails .talks .talk .talkInfo .bold {\n  font-weight: 600;\n  font-size: 1.5vmax;\n}\n.editionDetails .talks .talk .talkInfo .light {\n  font-weight: 200;\n  font-size: 1vmax;\n}\n.editionDetails .talks .talk .talkInfo .description {\n  margin-top: 1vmax;\n  margin-bottom: 1.5vmax;\n}\n.editionDetails .talks .talk .talkInfo .speakerInfo {\n  display: inline-block;\n}\n.editionDetails .talks .talk .talkInfo .speakerInfo .pic {\n  height: 6vmax;\n  width: 6vmax;\n  border-radius: 50%;\n}\n@media only screen and (max-width: 1024px) {\n  .editionDetails .talks .talk .talkInfo .speakerInfo .pic {\n    display: inline-block;\n  }\n}\n.editionDetails .talks .talk .talkInfo .speakerInfo .info {\n  text-align: left;\n}\n@media only screen and (max-width: 1024px) {\n  .editionDetails .talks .talk .talkInfo .speakerInfo .info {\n    padding-left: 1vmax;\n    padding-top: 1vmax;\n    vertical-align: top;\n    display: inline-block;\n  }\n}\n.editionDetails .talks .talk .talkInfo .speakers {\n  display: inline-block;\n}\n.editionDetails .talks .talk .talkInfo .speakers .speaker + .speaker {\n  padding-top: 1vmax;\n}\n.editionDetails .talks .talk .talkInfo .speakers .pic {\n  display: inline-block;\n  height: 4vmax;\n  width: 4vmax;\n  border-radius: 50%;\n}\n.editionDetails .talks .talk .talkInfo .speakers .info {\n  padding-top: 0.5vmax;\n  padding-left: 1vmax;\n  vertical-align: top;\n  display: inline-block;\n}\n.editionDetails .talks .talk .talkInfo .slides {\n  margin-top: 1vmax;\n  padding: 1vmax;\n  font-size: 1vmax;\n  display: inline-block;\n  color: white;\n  background-color: #008731;\n  border-radius: 4px;\n  text-decoration: none;\n  border: none;\n}\n.editionDetails .talks .talk iframe {\n  display: inline;\n  float: right;\n}\n@media only screen and (min-width: 1025px) {\n  .editionDetails .talks .talk iframe {\n    display: inline;\n    width: 560px;\n    height: 315px;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 1024px) {\n  .editionDetails .talks .talk iframe {\n    float: none;\n    margin-top: 1vmax;\n    width: 560px;\n    height: 315px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .editionDetails .talks .talk iframe {\n    float: none;\n    margin-top: 1vmax;\n    width: 320px;\n    height: 230px;\n  }\n}\n\n.copyright {\n  color: black;\n  text-align: center;\n  margin-top: 2vmax;\n  margin-bottom: 1vmax;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/banner/index.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/banner/index.scss ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../imgs/table-discussion-bg.png */ "./src/imgs/table-discussion-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../imgs/table-discussion-bg-2x.png */ "./src/imgs/table-discussion-bg-2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../imgs/abstract-bg.png */ "./src/imgs/abstract-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../imgs/abstract-bg-2x.png */ "./src/imgs/abstract-bg-2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../imgs/previous.svg */ "./src/imgs/previous.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../imgs/next.svg */ "./src/imgs/next.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#banner {\n  color: white;\n  object-fit: cover;\n  background-repeat: no-repeat;\n}\n#banner .topnav {\n  padding-top: 1em;\n  padding-bottom: 1em;\n  overflow: hidden;\n}\n#banner .topnav .item {\n  color: #f2f2f2;\n  float: right;\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  text-decoration: none;\n  opacity: 1;\n}\n#banner .topnav .item.logo {\n  float: left;\n  font-size: 1.5vmax;\n  font-weight: 800;\n  padding-left: 10px;\n  padding-right: 6px;\n}\n#banner .topnav .item.location {\n  float: left;\n  font-size: 1.5vmax;\n  padding-left: 0px;\n}\n@media only screen and (max-width: 480px) {\n  #banner .topnav .item.link {\n    display: none;\n  }\n}\n\n#banner.inactive {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@media only screen and (min-width: 1440px) {\n  #banner.inactive {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n}\n#banner.inactive .eventInfo {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n#banner.inactive .tagLine {\n  font-size: 2.5vmax;\n  text-align: center;\n}\n#banner.inactive .stats {\n  margin-top: 1vmax;\n  margin-bottom: 1vmax;\n  border-spacing: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n#banner.inactive .stats .item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 0px;\n  background: rgba(0, 0, 0, 0.4) 0% 0% no-repeat padding-box;\n  border: 0.05em solid white;\n  border-radius: 0.3em;\n  width: 5em;\n  height: 5em;\n  margin: 6px;\n}\n#banner.inactive .stats .item .value {\n  font-weight: 600;\n  font-size: 1.4vmax;\n}\n\n#banner.active {\n  padding-bottom: 1vmax;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n@media only screen and (min-width: 1440px) {\n  #banner.active {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  }\n}\n#banner.active .upcomingEditionInfo.small {\n  margin-top: 1vmax;\n  margin-left: 0;\n  padding-left: 10px;\n}\n#banner.active .upcomingEditionInfo.small .basicInfo .title {\n  margin-top: 0;\n  font-size: 1.5vmax;\n}\n#banner.active .upcomingEditionInfo.small .rsvp {\n  padding-top: 1vmax;\n}\n#banner.active .upcomingEditionInfo {\n  margin-top: 2vmax;\n  margin-left: 4vmax;\n}\n#banner.active .upcomingEditionInfo .basicInfo {\n  display: inline-block;\n  width: 75%;\n}\n@media only screen and (max-width: 768px) {\n  #banner.active .upcomingEditionInfo .basicInfo {\n    width: 95%;\n  }\n}\n#banner.active .upcomingEditionInfo .basicInfo .summary {\n  font-weight: 600;\n}\n#banner.active .upcomingEditionInfo .basicInfo .title {\n  margin-top: 0.5vmax;\n  font-size: 2.5vmax;\n  font-weight: 600;\n}\n#banner.active .upcomingEditionInfo .stats {\n  margin-top: 1vmax;\n  margin-bottom: 1vmax;\n  border-spacing: 10px;\n  display: flex;\n  flex-direction: row;\n}\n#banner.active .upcomingEditionInfo .stats .item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 0px;\n  background: rgba(0, 0, 0, 0.4) 0% 0% no-repeat padding-box;\n  border: 0.05em solid white;\n  border-radius: 0.3em;\n  width: 4em;\n  height: 4em;\n  margin: 6px;\n}\n#banner.active .upcomingEditionInfo .stats .item .value {\n  font-weight: 600;\n  font-size: 1vmax;\n}\n#banner.active .upcomingEditionInfo .stats .item .text {\n  font-size: 0.75vmax;\n}\n#banner.active .upcomingEditionInfo .rsvp {\n  padding-top: 2vmax;\n  vertical-align: top;\n  display: inline-block;\n}\n#banner.active .upcomingEditionInfo .rsvp .link {\n  color: #008731;\n  font-weight: 600;\n  background-color: white;\n  border-radius: 0.3vmax;\n  padding: 0.75vmax 1.5vmax;\n  text-decoration: none;\n}\n#banner.active .upcomingEditionInfo .talks {\n  width: 60%;\n  background: rgba(17, 170, 88, 0.5) 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  padding: 1vmax;\n  margin-top: 2vmax;\n}\n@media only screen and (max-width: 1024px) {\n  #banner.active .upcomingEditionInfo .talks {\n    width: 85%;\n  }\n}\n#banner.active .upcomingEditionInfo .talks .talkInfo {\n  display: inline-block;\n  vertical-align: top;\n  width: 60%;\n}\n@media only screen and (max-width: 1024px) {\n  #banner.active .upcomingEditionInfo .talks .talkInfo {\n    width: 85%;\n  }\n}\n#banner.active .upcomingEditionInfo .talks .talkInfo .talk-title {\n  font-size: 1.25vmax;\n  font-weight: 600;\n  padding-bottom: 0.25vmax;\n}\n#banner.active .upcomingEditionInfo .talks .talkInfo .timeSlot {\n  font-size: 0.7vmax;\n  padding-bottom: 0.5vmax;\n}\n#banner.active .upcomingEditionInfo .talks .talkInfo .description {\n  padding-bottom: 1vmax;\n  font-weight: 400;\n}\n#banner.active .upcomingEditionInfo .talks .speakerInfo {\n  padding-left: 1vmax;\n  display: inline-block;\n}\n#banner.active .upcomingEditionInfo .talks .speakerInfo .pic {\n  height: 6vmax;\n  width: 6vmax;\n  border-radius: 50%;\n}\n@media only screen and (max-width: 1024px) {\n  #banner.active .upcomingEditionInfo .talks .speakerInfo .pic {\n    display: inline-block;\n  }\n}\n#banner.active .upcomingEditionInfo .talks .speakerInfo .info {\n  text-align: left;\n}\n@media only screen and (max-width: 1024px) {\n  #banner.active .upcomingEditionInfo .talks .speakerInfo .info {\n    padding-left: 1vmax;\n    padding-top: 1vmax;\n    vertical-align: top;\n    display: inline-block;\n  }\n}\n#banner.active .upcomingEditionInfo .talks .speakers {\n  padding-left: 1vmax;\n  display: inline-block;\n}\n#banner.active .upcomingEditionInfo .talks .speakers .speaker + .speaker {\n  padding-top: 1vmax;\n}\n#banner.active .upcomingEditionInfo .talks .speakers .pic {\n  display: inline-block;\n  height: 4vmax;\n  width: 4vmax;\n  border-radius: 50%;\n}\n#banner.active .upcomingEditionInfo .talks .speakers .info {\n  padding-top: 0.5vmax;\n  padding-left: 1vmax;\n  vertical-align: top;\n  display: inline-block;\n}\n#banner.active .upcomingEditionInfo .talks button {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  cursor: pointer;\n}\n#banner.active .upcomingEditionInfo .talks button:disabled {\n  cursor: default;\n  opacity: 0.5;\n}\n#banner.active .upcomingEditionInfo .talks button + button {\n  margin-left: 2px;\n}\n#banner.active .upcomingEditionInfo .talks #prev {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  width: 19px;\n  height: 19px;\n}\n#banner.active .upcomingEditionInfo .talks #next {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  width: 19px;\n  height: 19px;\n}\n#banner.active .upcomingEditionInfo .talks .bold {\n  font-weight: 600;\n}\n#banner.active .upcomingEditionInfo .talks .light {\n  font-weight: 100;\n}\n\n.recentEditions {\n  margin: 1em;\n}\n.recentEditions .title {\n  font-size: 1.2vmax;\n}\n.recentEditions .editions {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/index.scss ***!
  \**********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/pen.png */ "./src/imgs/pen.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/file.png */ "./src/imgs/file.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/contact-us.png */ "./src/imgs/contact-us.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/colloborate-bg-2x.png */ "./src/imgs/colloborate-bg-2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/colloborate-bg.png */ "./src/imgs/colloborate-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/instagram.svg */ "./src/imgs/instagram.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/twitter.svg */ "./src/imgs/twitter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/linkedin.svg */ "./src/imgs/linkedin.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/youtube.svg */ "./src/imgs/youtube.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/meetup.svg */ "./src/imgs/meetup.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".recentEditions {\n  margin: 1em;\n}\n.recentEditions .banner {\n  font-size: 1.2vmax;\n}\n.recentEditions .view-all {\n  margin-left: 8px;\n  text-decoration: none;\n}\n.recentEditions .editions {\n  margin-top: 2vmax;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.recentEditions .editions .title {\n  font-size: 1.2vmax;\n}\n\n#collaborate {\n  background-color: #f4f4f4;\n}\n#collaborate .item.submit {\n  display: inline-block;\n  margin-left: 12vmax;\n  width: 35%;\n}\n@media only screen and (max-width: 480px) {\n  #collaborate .item.submit {\n    width: 65%;\n  }\n}\n#collaborate .title {\n  font-size: 2vmax;\n  font-weight: 600;\n}\n@media only screen and (min-width: 481px) {\n  #collaborate .title {\n    margin-bottom: 3vmax;\n  }\n}\n@media only screen and (max-width: 480px) {\n  #collaborate .button-wrapper {\n    display: none;\n  }\n}\n#collaborate .submit-talk-button {\n  margin-top: 2vmax;\n  padding: 1vmax;\n  font-size: 1vmax;\n  display: inline-block;\n  color: white;\n  background-color: #008731;\n  border-radius: 4px;\n  text-decoration: none;\n  border: none;\n}\n#collaborate .item.steps {\n  display: inline-block;\n  margin-left: 2vmax;\n  width: 40%;\n}\n@media only screen and (max-width: 480px) {\n  #collaborate .item.steps {\n    margin-left: 12vmax;\n    margin-top: 4vmax;\n    width: 80%;\n  }\n}\n#collaborate .steps .img.pen {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n#collaborate .steps .img.file {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#collaborate .steps .img.contact-us {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n#collaborate .step {\n  padding-bottom: 1vmax;\n}\n#collaborate .step .img {\n  width: 3.5vmax;\n  height: 3.5vmax;\n  display: inline-block;\n  background-size: cover;\n}\n#collaborate .step .text {\n  vertical-align: top;\n  margin-left: 2vmax;\n  display: inline-block;\n  width: 40%;\n}\n@media only screen and (max-width: 480px) {\n  #collaborate .step .text {\n    width: 60%;\n    font-size: 1.5vmax;\n  }\n}\n\n#collaborate > .button-wrapper {\n  display: none;\n}\n@media only screen and (max-width: 480px) {\n  #collaborate > .button-wrapper {\n    display: block;\n    text-align: center;\n  }\n}\n\n#aboutus {\n  margin-left: 4vmax;\n}\n#aboutus .title {\n  font-size: 1.5vmax;\n  font-weight: 600;\n}\n#aboutus .item {\n  display: inline-block;\n  width: 40%;\n}\n@media only screen and (max-width: 480px) {\n  #aboutus .item {\n    font-size: 1.5vmax;\n    width: 90%;\n  }\n}\n#aboutus .background {\n  display: inline-block;\n  height: auto;\n  min-height: 27vmax;\n  width: 40%;\n  margin-top: -5vmax;\n  margin-bottom: -5vmax;\n  margin-left: 10%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 1;\n  position: relative;\n}\n@media only screen and (min-width: 1025px) {\n  #aboutus .background {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 1024px) {\n  #aboutus .background {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    width: 60%;\n    margin-left: 0px;\n    min-height: 30vmax;\n  }\n}\n@media only screen and (max-width: 480px) {\n  #aboutus .background {\n    display: none;\n  }\n}\n#aboutus .feedback-link {\n  font-weight: 600;\n  color: #2680eb;\n  text-decoration: none;\n}\n\n#footer {\n  background-color: #f4f4f4;\n  width: 100%;\n  overflow: hidden;\n}\n#footer .item {\n  margin-top: 2vmax;\n  margin-left: 5vmax;\n  display: inline-block;\n  width: 40%;\n}\n#footer .bold {\n  font-weight: 600;\n}\n#footer .social-links a {\n  display: inline-block;\n  width: 3vmax;\n  height: 3vmax;\n  background-size: cover;\n  margin-right: 2px;\n}\n#footer .instagram {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n#footer .twitter {\n  margin-left: 2px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n#footer .linkedin {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n#footer .youtube {\n  margin-left: 2px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n#footer .meetup {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n#footer .copyright {\n  color: black;\n  text-align: center;\n  margin-top: 2vmax;\n  margin-bottom: 1vmax;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/imgs/abstract-bg-2x.png":
/*!*************************************!*\
  !*** ./src/imgs/abstract-bg-2x.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8aed7887b0b5b5ecb81e.png";

/***/ }),

/***/ "./src/imgs/abstract-bg.png":
/*!**********************************!*\
  !*** ./src/imgs/abstract-bg.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9bb1af124cd5c900627f.png";

/***/ }),

/***/ "./src/imgs/colloborate-bg-2x.png":
/*!****************************************!*\
  !*** ./src/imgs/colloborate-bg-2x.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b1ad0b2328de4e4315c6.png";

/***/ }),

/***/ "./src/imgs/colloborate-bg.png":
/*!*************************************!*\
  !*** ./src/imgs/colloborate-bg.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ecee7406607ce1a164a0.png";

/***/ }),

/***/ "./src/imgs/contact-us.png":
/*!*********************************!*\
  !*** ./src/imgs/contact-us.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8696842444c5d06ce722.png";

/***/ }),

/***/ "./src/imgs/event-bg-0.png":
/*!*********************************!*\
  !*** ./src/imgs/event-bg-0.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09bff8a7398a0aa79e71.png";

/***/ }),

/***/ "./src/imgs/event-bg-1.png":
/*!*********************************!*\
  !*** ./src/imgs/event-bg-1.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe2558104e55d6d627f2.png";

/***/ }),

/***/ "./src/imgs/event-bg-2.png":
/*!*********************************!*\
  !*** ./src/imgs/event-bg-2.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d9c57ab2a39284785aae.png";

/***/ }),

/***/ "./src/imgs/event-bg-3.png":
/*!*********************************!*\
  !*** ./src/imgs/event-bg-3.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0792f11622f3e20d7540.png";

/***/ }),

/***/ "./src/imgs/event-bg-4.png":
/*!*********************************!*\
  !*** ./src/imgs/event-bg-4.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b487982a95fbad063029.png";

/***/ }),

/***/ "./src/imgs/file.png":
/*!***************************!*\
  !*** ./src/imgs/file.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b170abf50ee5dffdc35.png";

/***/ }),

/***/ "./src/imgs/instagram.svg":
/*!********************************!*\
  !*** ./src/imgs/instagram.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "18711bc2bd5851360a6a.svg";

/***/ }),

/***/ "./src/imgs/linkedin.svg":
/*!*******************************!*\
  !*** ./src/imgs/linkedin.svg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e00c4410e214b288910.svg";

/***/ }),

/***/ "./src/imgs/meetup.svg":
/*!*****************************!*\
  !*** ./src/imgs/meetup.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d2cd06bf3d17518ded6b.svg";

/***/ }),

/***/ "./src/imgs/next.svg":
/*!***************************!*\
  !*** ./src/imgs/next.svg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b73f9841c7065208af2b.svg";

/***/ }),

/***/ "./src/imgs/pen.png":
/*!**************************!*\
  !*** ./src/imgs/pen.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "081975c9791613ab1452.png";

/***/ }),

/***/ "./src/imgs/previous.svg":
/*!*******************************!*\
  !*** ./src/imgs/previous.svg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea73f73ae4a5b4c8379a.svg";

/***/ }),

/***/ "./src/imgs/spinner.svg":
/*!******************************!*\
  !*** ./src/imgs/spinner.svg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2374f7babc17a5ae0802827428fc5171.svg");

/***/ }),

/***/ "./src/imgs/table-discussion-bg-2x.png":
/*!*********************************************!*\
  !*** ./src/imgs/table-discussion-bg-2x.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "351aa2865340628ee151.png";

/***/ }),

/***/ "./src/imgs/table-discussion-bg.png":
/*!******************************************!*\
  !*** ./src/imgs/table-discussion-bg.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "63c63c55841b1f81eab3.png";

/***/ }),

/***/ "./src/imgs/twitter.svg":
/*!******************************!*\
  !*** ./src/imgs/twitter.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ace40544706a10e6688.svg";

/***/ }),

/***/ "./src/imgs/youtube.svg":
/*!******************************!*\
  !*** ./src/imgs/youtube.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c50357cbca1152787607.svg";

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/edition/index.scss":
/*!********************************!*\
  !*** ./src/edition/index.scss ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/edition/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/edition/index.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/edition/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/home/banner/index.scss":
/*!************************************!*\
  !*** ./src/home/banner/index.scss ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/banner/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/banner/index.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/banner/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/home/index.scss":
/*!*****************************!*\
  !*** ./src/home/index.scss ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/index.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrdinalNum": function() { return /* binding */ getOrdinalNum; },
/* harmony export */   "padZeros": function() { return /* binding */ padZeros; },
/* harmony export */   "getLocalTime": function() { return /* binding */ getLocalTime; },
/* harmony export */   "getFormattedDate": function() { return /* binding */ getFormattedDate; },
/* harmony export */   "getParamValueFromURL": function() { return /* binding */ getParamValueFromURL; }
/* harmony export */ });
const getOrdinalNum = (n) =>
  n > 0
    ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
    : "";

const padZeros = (number, maxLength) =>
  String(number).padStart(maxLength, "0");

const getLocalTime = (date) =>
  date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

const getFormattedDate = (date) =>
  date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const getParamValueFromURL = (name, url = window.location.href) => {
  name = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-1a6eeb"], function() { return __webpack_exec__("./src/app.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.94763bd8a53e5c73eefe.js.map