ScalaJS.impls.java_lang_JSConsoleBasedPrintStream$class__print__Ljava_lang_JSConsoleBasedPrintStream__T__V = (function($$this, s) {
  if ((s === null)) {
    var rest = "null"
  } else {
    var rest = s
  };
  while ((!(!rest))) {
    var nlPos = rest["indexOf"]("\n");
    if ((nlPos < 0)) {
      $$this.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__V(($$this.java$lang$JSConsoleBasedPrintStream$$buffer__Lscala_scalajs_js_String() + rest));
      $$this.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__V(false);
      rest = ""
    } else {
      $$this.doWriteLine__T__V(($$this.java$lang$JSConsoleBasedPrintStream$$buffer__Lscala_scalajs_js_String() + rest["substring"](0, nlPos)));
      $$this.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__V("");
      $$this.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__V(true);
      rest = rest["substring"]((nlPos + 1))
    }
  }
});
ScalaJS.impls.java_lang_JSConsoleBasedPrintStream$class__flush__Ljava_lang_JSConsoleBasedPrintStream__V = (function($$this) {
  if ((!$$this.java$lang$JSConsoleBasedPrintStream$$flushed__Lscala_scalajs_js_Boolean())) {
    $$this.doWriteLine__T__V(($$this.java$lang$JSConsoleBasedPrintStream$$buffer__Lscala_scalajs_js_String() + $$this.java$lang$JSConsoleBasedPrintStream$$lineContEnd__Lscala_scalajs_js_String()));
    $$this.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__V($$this.java$lang$JSConsoleBasedPrintStream$$lineContStart__Lscala_scalajs_js_String());
    $$this.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__V(true)
  }
});
ScalaJS.impls.java_lang_JSConsoleBasedPrintStream$class__$init$__Ljava_lang_JSConsoleBasedPrintStream__V = (function($$this) {
  $$this.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__V(true);
  $$this.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__V("");
  $$this.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContEnd$und$eq__Lscala_scalajs_js_String__V("\u21a9");
  $$this.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContStart$und$eq__Lscala_scalajs_js_String__V("\u21aa")
});
//@ sourceMappingURL=JSConsoleBasedPrintStream$class.js.map
