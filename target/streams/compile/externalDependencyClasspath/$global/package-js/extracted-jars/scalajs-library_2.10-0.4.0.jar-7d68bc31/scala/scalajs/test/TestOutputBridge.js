/** @constructor */
ScalaJS.c.scala_scalajs_test_TestOutputBridge = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f = null;
  this.errorColor$1 = null;
  this.successColor$1 = null;
  this.infoColor$1 = null;
  this.reset$1 = null;
  this.log$1 = null
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.constructor = ScalaJS.c.scala_scalajs_test_TestOutputBridge;
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.errorColor__T = (function() {
  return this.errorColor$1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.successColor__T = (function() {
  return this.successColor$1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.infoColor__T = (function() {
  return this.infoColor$1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.reset__T = (function() {
  return this.reset$1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.color__T__T__T = (function(message, color) {
  return ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(message)).split__C__AT(10), 1)).mkString__T__T__T__T(color, ((("" + this.reset__T()) + ScalaJS.bC(10)) + color), this.reset__T())
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.error__T__ALscala_scalajs_test_ScriptStackElement__V = (function(message, stack) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["error"](message, this.toJsArray__p1__ALscala_scalajs_test_ScriptStackElement__Lscala_scalajs_js_Array(stack))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.error__T__V = (function(message) {
  this.error__T__ALscala_scalajs_test_ScriptStackElement__V(message, ScalaJS.asArrayOf.scala_scalajs_test_ScriptStackElement(ScalaJS.modules.scala_Array().empty__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_scalajs_test_ScriptStackElement.getClassOf())), 1))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.failure__T__ALscala_scalajs_test_ScriptStackElement__V = (function(message, stack) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["failure"](message, this.toJsArray__p1__ALscala_scalajs_test_ScriptStackElement__Lscala_scalajs_js_Array(stack))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.failure__T__V = (function(message) {
  this.failure__T__ALscala_scalajs_test_ScriptStackElement__V(message, ScalaJS.asArrayOf.scala_scalajs_test_ScriptStackElement(ScalaJS.modules.scala_Array().empty__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_scalajs_test_ScriptStackElement.getClassOf())), 1))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.succeeded__T__V = (function(message) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["succeeded"](message)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.skipped__T__V = (function(message) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["skipped"](message)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.pending__T__V = (function(message) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["pending"](message)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.ignored__T__V = (function(message) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["ignored"](message)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.canceled__T__V = (function(message) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f["canceled"](message)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.log__Lscala_scalajs_test_TestOutputLog = (function() {
  return this.log$1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.getCurrentStack__ALscala_scalajs_test_ScriptStackElement = (function() {
  var RhinoExceptionClass = ScalaJS.g["Packages"]["org"]["mozilla"]["javascript"]["JavaScriptException"];
  var rhinoException = new RhinoExceptionClass("stack creation");
  var rhinoStack = rhinoException["getScriptStack"]();
  var stack = ScalaJS.as.scala_collection_immutable_IndexedSeq(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), (rhinoStack["length"] | 0)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(rhinoStack$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      var e = rhinoStack$1[i];
      return ScalaJS.modules.scala_scalajs_test_ScriptStackElement().apply__T__T__I__Lscala_scalajs_test_ScriptStackElement(ScalaJS.objectToString(e["fileName"]), ScalaJS.objectToString(e["functionName"]), (e["lineNumber"] | 0))
    })
  })(rhinoStack)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  return ScalaJS.asArrayOf.scala_scalajs_test_ScriptStackElement(stack.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_scalajs_test_ScriptStackElement.getClassOf())), 1)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.toJsArray__p1__ALscala_scalajs_test_ScriptStackElement__Lscala_scalajs_js_Array = (function(a) {
  return ScalaJS.modules.scala_scalajs_js_Any().fromArray__O__Lscala_scalajs_js_Array(this.elementToJS__p1__Lscala_collection_Seq__ALscala_scalajs_js_Any(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(a, 1))))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.elementToJS__p1__Lscala_collection_Seq__ALscala_scalajs_js_Any = (function(a) {
  return ScalaJS.asArrayOf.scala_scalajs_js_Any(ScalaJS.as.scala_collection_TraversableOnce(a.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(el) {
      return arg$outer.scala$scalajs$test$TestOutputBridge$$stackElementToJS__Lscala_scalajs_test_ScriptStackElement__Lscala_scalajs_js_Any(el)
    })
  })(this)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_scalajs_js_Any.getClassOf())), 1)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.scala$scalajs$test$TestOutputBridge$$stackElementToJS__Lscala_scalajs_test_ScriptStackElement__Lscala_scalajs_js_Any = (function(s) {
  return {
    "fileName": s.fileName__T(),
    "functionName": s.functionName__T(),
    "lineNumber": s.lineNumber__I()
  }
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.init___Lscala_scalajs_test_EventProxy = (function(eventProxy) {
  this.scala$scalajs$test$TestOutputBridge$$eventProxy$f = eventProxy;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.errorColor$1 = "\u001b[31m";
  this.successColor$1 = "\u001b[32m";
  this.infoColor$1 = "\u001b[34m";
  this.reset$1 = "\u001b[0m";
  this.log$1 = new ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1().init___Lscala_scalajs_test_TestOutputBridge(this);
  return this
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.scala$scalajs$test$TestOutputBridge$$stackElementToJS__Lscala_scalajs_test_ScriptStackElement__ = (function(s) {
  return this.scala$scalajs$test$TestOutputBridge$$stackElementToJS__Lscala_scalajs_test_ScriptStackElement__Lscala_scalajs_js_Any(s)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.getCurrentStack__ = (function() {
  return this.getCurrentStack__ALscala_scalajs_test_ScriptStackElement()
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.log__ = (function() {
  return this.log__Lscala_scalajs_test_TestOutputLog()
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.canceled__T__ = (function(message) {
  return ScalaJS.bV(this.canceled__T__V(message))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.ignored__T__ = (function(message$2) {
  return ScalaJS.bV(this.ignored__T__V(message$2))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.pending__T__ = (function(message$3) {
  return ScalaJS.bV(this.pending__T__V(message$3))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.skipped__T__ = (function(message$4) {
  return ScalaJS.bV(this.skipped__T__V(message$4))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.succeeded__T__ = (function(message$5) {
  return ScalaJS.bV(this.succeeded__T__V(message$5))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.failure__T__ = (function(message$6) {
  return ScalaJS.bV(this.failure__T__V(message$6))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.failure__T__ALscala_scalajs_test_ScriptStackElement__ = (function(message$7, stack) {
  return ScalaJS.bV(this.failure__T__ALscala_scalajs_test_ScriptStackElement__V(message$7, stack))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.error__T__ = (function(message$8) {
  return ScalaJS.bV(this.error__T__V(message$8))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.error__T__ALscala_scalajs_test_ScriptStackElement__ = (function(message$9, stack$2) {
  return ScalaJS.bV(this.error__T__ALscala_scalajs_test_ScriptStackElement__V(message$9, stack$2))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.color__T__T__ = (function(message$10, color) {
  return this.color__T__T__T(message$10, color)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.reset__ = (function() {
  return this.reset__T()
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.infoColor__ = (function() {
  return this.infoColor__T()
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.successColor__ = (function() {
  return this.successColor__T()
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.errorColor__ = (function() {
  return this.errorColor__T()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_test_TestOutputBridge = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_test_TestOutputBridge.prototype = ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype;
ScalaJS.is.scala_scalajs_test_TestOutputBridge = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_test_TestOutputBridge)))
});
ScalaJS.as.scala_scalajs_test_TestOutputBridge = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_test_TestOutputBridge(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.test.TestOutputBridge")
  }
});
ScalaJS.isArrayOf.scala_scalajs_test_TestOutputBridge = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_test_TestOutputBridge)))
});
ScalaJS.asArrayOf.scala_scalajs_test_TestOutputBridge = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_test_TestOutputBridge(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.test.TestOutputBridge;", depth)
  }
});
ScalaJS.data.scala_scalajs_test_TestOutputBridge = new ScalaJS.ClassTypeData({
  scala_scalajs_test_TestOutputBridge: 0
}, false, "scala.scalajs.test.TestOutputBridge", ScalaJS.data.java_lang_Object, {
  scala_scalajs_test_TestOutputBridge: 1,
  scala_scalajs_test_TestOutput: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge.prototype.$classData = ScalaJS.data.scala_scalajs_test_TestOutputBridge;
//@ sourceMappingURL=TestOutputBridge.js.map
