/** @constructor */
ScalaJS.c.scala_scalajs_runtime_StackTrace$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.isRhino$1 = false;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.constructor = ScalaJS.c.scala_scalajs_runtime_StackTrace$;
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.isRhino$lzycompute__p1__Z = (function() {
  if ((!this.bitmap$0$1)) {
    this.isRhino$1 = this.liftedTree1$1__p1__Z();
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.isRhino$1
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.captureState__Ljava_lang_Throwable__V = (function(throwable) {
  this.captureState__Ljava_lang_Throwable__Lscala_scalajs_js_Any__V(throwable, this.createException__p1__Lscala_scalajs_js_Any())
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.createException__p1__Lscala_scalajs_js_Any = (function() {
  try {
    return this["undef"]()
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    if (ScalaJS.is.scala_scalajs_js_JavaScriptException(x4)) {
      var x5 = ScalaJS.as.scala_scalajs_js_JavaScriptException(x4);
      var e = x5.exception__Lscala_scalajs_js_Any();
      return e
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.captureState__Ljava_lang_Throwable__Lscala_scalajs_js_Any__V = (function(throwable, e) {
  throwable["stackdata"] = e
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.isRhino__p1__Z = (function() {
  if ((!this.bitmap$0$1)) {
    return this.isRhino$lzycompute__p1__Z()
  } else {
    return this.isRhino$1
  }
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extract__Ljava_lang_Throwable__ALjava_lang_StackTraceElement = (function(throwable) {
  var e = throwable["stackdata"];
  var lines = this.normalizeStackTraceLines__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e);
  return this.normalizedLinesToStackTrace__p1__Lscala_scalajs_js_Array__ALjava_lang_StackTraceElement(lines)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.normalizedLinesToStackTrace__p1__Lscala_scalajs_js_Array__ALjava_lang_StackTraceElement = (function(lines) {
  var NormalizedFrameLine = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^([^\\@]*)\\@(.*):([0-9]+)$"));
  var NormalizedFrameLineWithColumn = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^([^\\@]*)\\@(.*):([0-9]+):([0-9]+)$"));
  var result = new ScalaJS.g["Array"]();
  var i = 0;
  while ((i < lines["length"])) {
    var line = lines[i];
    if ((!(!line))) {
      var mtch1 = NormalizedFrameLineWithColumn["exec"](line);
      if ((mtch1 !== null)) {
        var x1 = this.extractClassMethod__p1__T__Lscala_Tuple2(mtch1[1]);
        matchEnd3: {
          if ((x1 !== null)) {
            var className = ScalaJS.as.java_lang_String(x1.$$und1__O());
            var methodName = ScalaJS.as.java_lang_String(x1.$$und2__O());
            var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(className, methodName);
            break matchEnd3
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1)
        };
        var className$2 = ScalaJS.as.java_lang_String(x$1.$$und1__O());
        var methodName$2 = ScalaJS.as.java_lang_String(x$1.$$und2__O());
        result["push"](this.STE__p1__T__T__T__I__I__Ljava_lang_StackTraceElement(className$2, methodName$2, mtch1[2], new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_scalajs_js_Any().stringOps__Lscala_scalajs_js_String__T(mtch1[3])).toInt__I(), new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_scalajs_js_Any().stringOps__Lscala_scalajs_js_String__T(mtch1[4])).toInt__I()))
      } else {
        var mtch2 = NormalizedFrameLine["exec"](line);
        if ((mtch2 !== null)) {
          var x1$2 = this.extractClassMethod__p1__T__Lscala_Tuple2(mtch2[1]);
          matchEnd3$2: {
            if ((x1$2 !== null)) {
              var className$3 = ScalaJS.as.java_lang_String(x1$2.$$und1__O());
              var methodName$3 = ScalaJS.as.java_lang_String(x1$2.$$und2__O());
              var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(className$3, methodName$3);
              break matchEnd3$2
            };
            throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
          };
          var className$4 = ScalaJS.as.java_lang_String(x$2.$$und1__O());
          var methodName$4 = ScalaJS.as.java_lang_String(x$2.$$und2__O());
          result["push"](this.STE__p1__T__T__T__I__Ljava_lang_StackTraceElement(className$4, methodName$4, mtch2[2], new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_scalajs_js_Any().stringOps__Lscala_scalajs_js_String__T(mtch2[3])).toInt__I()))
        } else {
          result["push"](this.STE__p1__T__T__T__I__Ljava_lang_StackTraceElement("<jscode>", line, null, -1))
        }
      }
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 1)
  };
  return ScalaJS.asArrayOf.java_lang_StackTraceElement(ScalaJS.modules.scala_scalajs_js_Any().toArray__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__O(result, ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_StackTraceElement.getClassOf())), 1)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractClassMethod__p1__T__Lscala_Tuple2 = (function(functionName) {
  var Pat = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^ScalaJS\\.c\\.([^\\.]+)(\\.prototype)?\\.([^\\.]+)$"));
  var mtch = Pat["exec"](functionName);
  if ((mtch !== null)) {
    var classEncoding = mtch[1];
    var methodEncoding = mtch[3];
    var className = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replace__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Ljava_lang_CharSequence__T(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replace__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Ljava_lang_CharSequence__T(classEncoding, "_", "."), "$und", "_");
    if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(methodEncoding, "init___")) {
      var methodName = "<init>"
    } else {
      var methodNameLen = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I(methodEncoding, "__");
      if ((methodNameLen < 0)) {
        var methodName = methodEncoding
      } else {
        var methodName = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(methodEncoding, 0, methodNameLen)
      }
    };
    return new ScalaJS.c.scala_Tuple2().init___O__O(className, methodName)
  } else {
    return new ScalaJS.c.scala_Tuple2().init___O__O("<jscode>", functionName)
  }
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.STE__p1__T__T__T__I__Ljava_lang_StackTraceElement = (function(declaringClass, methodName, fileName, lineNumber) {
  return new ScalaJS.c.java_lang_StackTraceElement().init___T__T__T__I(declaringClass, methodName, fileName, lineNumber)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.STE__p1__T__T__T__I__I__Ljava_lang_StackTraceElement = (function(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  return new ScalaJS.c.java_lang_StackTraceElement().init___T__T__T__I(declaringClass, methodName, fileName, lineNumber)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.StringRE__p1__T__T = (function(s) {
  return s
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.normalizeStackTraceLines__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  if ((!e)) {
    return []
  } else {
    if (this.isRhino__p1__Z()) {
      return this.extractRhino__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
    } else {
      if (((!(!e["arguments"])) && (!(!e["stack"])))) {
        return this.extractChrome__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
      } else {
        if (((!(!e["stack"])) && (!(!e["sourceURL"])))) {
          return this.extractSafari__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
        } else {
          if (((!(!e["stack"])) && (!(!e["number"])))) {
            return this.extractIE__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
          } else {
            if (((!(!e["stack"])) && (!(!e["fileName"])))) {
              return this.extractFirefox__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
            } else {
              if (((!(!e["message"])) && (!(!e["opera#sourceloc"])))) {
                if ((!e["stacktrace"])) {
                  return this.extractOpera9__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                } else {
                  if (((e["message"]["indexOf"]("\n") > -1) && (e["message"]["split"]("\n")["length"] > e["stacktrace"]["split"]("\n")["length"]))) {
                    return this.extractOpera9__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                  } else {
                    return this.extractOpera10a__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                  }
                }
              } else {
                if ((((!(!e["message"])) && (!(!e["stack"]))) && (!(!e["stacktrace"])))) {
                  if ((e["stacktrace"]["indexOf"]("called from line") < 0)) {
                    return this.extractOpera10b__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                  } else {
                    return this.extractOpera11__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                  }
                } else {
                  if (((!(!e["stack"])) && (!e["fileName"]))) {
                    return this.extractChrome__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                  } else {
                    return this.extractOther__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array(e)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractRhino__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  return e["stack"]["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^\\s+at\\s+"), "gm"), "")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^(.+) \\((.+)\\)$"), "gm"), "$2@$1")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("\\r\\n?"), "gm"), "\n")["split"]("\n")
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractChrome__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  return (e["stack"] + "\n")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^[\\s\\S]+?\\s+at\\s+")), " at ")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^\\s+(at eval )?at\\s+"), "gm"), "")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^([^\\(]+?)([\\n])"), "gm"), "{anonymous}() ($1)$2")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^Object.<anonymous>\\s*\\(([^\\)]+)\\)"), "gm"), "{anonymous}() ($1)")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^(.+) \\((.+)\\)$"), "gm"), "$1@$2")["split"]("\n")["slice"](0, -1)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractFirefox__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  return e["stack"]["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("(?:\\n@:0)?\\s+$"), "m"), "")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^(?:\\((\\S*)\\))?@"), "gm"), "{anonymous}($1)@")["split"]("\n")
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractIE__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  return e["stack"]["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^\\s*at\\s+(.*)$"), "gm"), "$1")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^Anonymous function\\s+"), "gm"), "{anonymous}() ")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^(.+)\\s+\\((.+)\\)$"), "gm"), "$1@$2")["split"]("\n")["slice"](1)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractSafari__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  return e["stack"]["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("\\[native code\\]\\n"), "m"), "")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^(?=\\w+Error\\:).*$\\n"), "m"), "")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^@"), "gm"), "{anonymous}()@")["split"]("\n")
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractOpera9__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  var lineRE = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("Line (\\d+).*script (?:in )?(\\S+)"), "i");
  var lines = e["message"]["split"]("\n");
  var result = new ScalaJS.g["Array"]();
  var i = 2;
  var len = (lines["length"] | 0);
  while ((i < len)) {
    var mtch = lineRE["exec"](lines[i]);
    if ((mtch !== null)) {
      result["push"](((("{anonymous}()@" + mtch[2]) + ":") + mtch[1]))
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 2)
  };
  return result
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractOpera10a__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  var lineRE = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension1__T__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$"), "i");
  var lines = e["stacktrace"]["split"]("\n");
  var result = new ScalaJS.g["Array"]();
  var i = 0;
  var len = (lines["length"] | 0);
  while ((i < len)) {
    var mtch = lineRE["exec"](lines[i]);
    if ((mtch !== null)) {
      if ((!mtch[3])) {
        var fnName = "{anonymous}"
      } else {
        var fnName = mtch[3]
      };
      result["push"](((((fnName + "()@") + mtch[2]) + ":") + mtch[1]))
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 2)
  };
  return result
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractOpera10b__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  var lineRE = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^(.*)@(.+):(\\d+)$"));
  var lines = e["stacktrace"]["split"]("\n");
  var result = new ScalaJS.g["Array"]();
  var i = 0;
  var len = (lines["length"] | 0);
  while ((i < len)) {
    var mtch = lineRE["exec"](lines[i]);
    if ((mtch !== null)) {
      if ((!mtch[1])) {
        var fnName = "global code"
      } else {
        var fnName = (mtch[1] + "()")
      };
      result["push"](((((fnName + "@") + mtch[2]) + ":") + mtch[3]))
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 1)
  };
  return result
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractOpera11__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  var lineRE = ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$"));
  var lines = e["stacktrace"]["split"]("\n");
  var result = new ScalaJS.g["Array"]();
  var i = 0;
  var len = (lines["length"] | 0);
  while ((i < len)) {
    var mtch = lineRE["exec"](lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      if ((!mtch[3])) {
        var fnName0 = "global code"
      } else {
        var fnName0 = mtch[3]
      };
      var fnName = fnName0["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("<anonymous function: (\\S+)>")), "$1")["replace"](ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE().re$extension0__T__Lscala_scalajs_js_RegExp(this.StringRE__p1__T__T("<anonymous function>")), "{anonymous}");
      result["push"](((fnName + "@") + location))
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 2)
  };
  return result
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extractOther__p1__Lscala_scalajs_js_Dynamic__Lscala_scalajs_js_Array = (function(e) {
  return []
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.liftedTree1$1__p1__Z = (function() {
  try {
    ScalaJS.g["Packages"]["org"]["mozilla"]["javascript"]["JavaScriptException"];
    return true
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex8 = $jsexc$;
    var x5 = ex8;
    if (ScalaJS.is.scala_scalajs_js_JavaScriptException(x5)) {
      return false
    };
    throw ScalaJS.unwrapJavaScriptException(ex8)
  }
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.extract__Ljava_lang_Throwable__ = (function(throwable) {
  return this.extract__Ljava_lang_Throwable__ALjava_lang_StackTraceElement(throwable)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.captureState__Ljava_lang_Throwable__Lscala_scalajs_js_Any__ = (function(throwable$2, e) {
  return ScalaJS.bV(this.captureState__Ljava_lang_Throwable__Lscala_scalajs_js_Any__V(throwable$2, e))
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.captureState__Ljava_lang_Throwable__ = (function(throwable$3) {
  return ScalaJS.bV(this.captureState__Ljava_lang_Throwable__V(throwable$3))
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_runtime_StackTrace$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_runtime_StackTrace$.prototype = ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype;
ScalaJS.is.scala_scalajs_runtime_StackTrace$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_runtime_StackTrace$)))
});
ScalaJS.as.scala_scalajs_runtime_StackTrace$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_runtime_StackTrace$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.runtime.StackTrace")
  }
});
ScalaJS.isArrayOf.scala_scalajs_runtime_StackTrace$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_runtime_StackTrace$)))
});
ScalaJS.asArrayOf.scala_scalajs_runtime_StackTrace$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_runtime_StackTrace$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.runtime.StackTrace;", depth)
  }
});
ScalaJS.data.scala_scalajs_runtime_StackTrace$ = new ScalaJS.ClassTypeData({
  scala_scalajs_runtime_StackTrace$: 0
}, false, "scala.scalajs.runtime.StackTrace$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_runtime_StackTrace$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$.prototype.$classData = ScalaJS.data.scala_scalajs_runtime_StackTrace$;
ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace = undefined;
ScalaJS.modules.scala_scalajs_runtime_StackTrace = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace)) {
    ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace = new ScalaJS.c.scala_scalajs_runtime_StackTrace$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace
});
//@ sourceMappingURL=StackTrace$.js.map
