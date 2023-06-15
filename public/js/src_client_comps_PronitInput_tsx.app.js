"use strict";
(self["webpackChunksanket"] = self["webpackChunksanket"] || []).push([["src_client_comps_PronitInput_tsx"],{

/***/ "./src/client/comps/PronitInput.tsx":
/*!******************************************!*\
  !*** ./src/client/comps/PronitInput.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var InputComponent = function (_a) {
    var className = _a.className, columnWidth = _a.columnWidth, _b = _a.editMode, editMode = _b === void 0 ? false : _b, data = _a.data;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data), value = _c[0], setValue = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setValue(data);
    }, [data]);
    var handleChange = function (e) {
        setValue(e.target.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: className, style: { width: columnWidth }, value: value, onChange: handleChange, disabled: !editMode }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9jb21wc19Qcm9uaXRJbnB1dF90c3guYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNuRDtBQUNBO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLGdEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBbUIsWUFBWSw2Q0FBNkMsb0JBQW9CLDZEQUE2RDtBQUN6SztBQUNBLGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbmtldC8uL3NyYy9jbGllbnQvY29tcHMvUHJvbml0SW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xudmFyIElucHV0Q29tcG9uZW50ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgY29sdW1uV2lkdGggPSBfYS5jb2x1bW5XaWR0aCwgX2IgPSBfYS5lZGl0TW9kZSwgZWRpdE1vZGUgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgZGF0YSA9IF9hLmRhdGE7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZGF0YSksIHZhbHVlID0gX2NbMF0sIHNldFZhbHVlID0gX2NbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VmFsdWUoZGF0YSk7XG4gICAgfSwgW2RhdGFdKTtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiB7IHdpZHRoOiBjb2x1bW5XaWR0aCB9LCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIGRpc2FibGVkOiAhZWRpdE1vZGUgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IElucHV0Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9