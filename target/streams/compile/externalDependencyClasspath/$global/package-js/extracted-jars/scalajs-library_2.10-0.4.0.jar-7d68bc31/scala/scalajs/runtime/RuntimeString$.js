/** @constructor */
ScalaJS.c.scala_scalajs_runtime_RuntimeString$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.constructor = ScalaJS.c.scala_scalajs_runtime_RuntimeString$;
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__Lscala_scalajs_js_String = (function() {
  return ""
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AC__Lscala_scalajs_js_String = (function(value) {
  return this.newString__AC__I__I__Lscala_scalajs_js_String(value, 0, value.underlying.length)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AC__I__I__Lscala_scalajs_js_String = (function(value, offset, count) {
  var res = new ScalaJS.c.scala_runtime_ObjectRef().init___O("");
  ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(value).view__I__I__Lscala_collection_mutable_IndexedSeqView(offset, (offset + count)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(res$1) {
    return (function(c) {
      c = ScalaJS.uC(c);
      res$1.elem$1 = (res$1.elem$1 + ScalaJS.objectToString(ScalaJS.bC(c)));
      return ScalaJS.bV(undefined)
    })
  })(res)));
  return res.elem$1
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AB__T__Lscala_scalajs_js_String = (function(bytes, charsetName) {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AB__I__I__T__Lscala_scalajs_js_String = (function(bytes, offest, length, charsetName) {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AI__I__I__Lscala_scalajs_js_String = (function(codePoints, offset, count) {
  return ScalaJS.applyMethodWithVarargs(ScalaJS.g["String"], "fromCharCode", ScalaJS.modules.scala_scalajs_js_Any().fromTraversableOnce__Lscala_collection_TraversableOnce__Lscala_scalajs_js_Array(ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(codePoints).view__I__I__Lscala_collection_mutable_IndexedSeqView(offset, (offset + count)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$4) {
      x$4 = ScalaJS.uI(x$4);
      return x$4
    })
  })()), ScalaJS.modules.scala_collection_mutable_IndexedSeqView().arrCanBuildFrom__Lscala_collection_generic_CanBuildFrom()))))
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__T__Lscala_scalajs_js_String = (function(original) {
  return original
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__Ljava_lang_StringBuffer__Lscala_scalajs_js_String = (function(buffer) {
  return buffer.toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__Ljava_lang_StringBuilder__Lscala_scalajs_js_String = (function(builder) {
  return builder.toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__Z__T = (function(value) {
  return new ScalaJS.c.java_lang_Boolean().init___Z(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__C__T = (function(value) {
  return new ScalaJS.c.java_lang_Character().init___C(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__B__T = (function(value) {
  return new ScalaJS.c.java_lang_Byte().init___B(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__S__T = (function(value) {
  return new ScalaJS.c.java_lang_Short().init___S(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__I__T = (function(value) {
  return new ScalaJS.c.java_lang_Integer().init___I(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__J__T = (function(value) {
  return new ScalaJS.c.java_lang_Long().init___J(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__F__T = (function(value) {
  return new ScalaJS.c.java_lang_Float().init___F(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__D__T = (function(value) {
  return new ScalaJS.c.java_lang_Double().init___D(value).toString__T()
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__O__T = (function(value) {
  if ((value === null)) {
    return "null"
  } else {
    return ScalaJS.objectToString(value)
  }
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.format__T__AO__T = (function(format, args) {
  var frm = new ScalaJS.c.java_util_Formatter().init___();
  var res = frm.format__T__AO__Ljava_util_Formatter(format, args).toString__T();
  frm.close__V();
  return res
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.format__T__AO__ = (function(format, args) {
  return this.format__T__AO__T(format, args)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__O__ = (function(value) {
  return this.valueOf__O__T(value)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__D__ = (function(value$2) {
  return this.valueOf__D__T(value$2)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__F__ = (function(value$3) {
  return this.valueOf__F__T(value$3)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__J__ = (function(value$4) {
  return this.valueOf__J__T(value$4)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__I__ = (function(value$5) {
  return this.valueOf__I__T(value$5)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__S__ = (function(value$6) {
  return this.valueOf__S__T(value$6)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__B__ = (function(value$7) {
  return this.valueOf__B__T(value$7)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__C__ = (function(value$8) {
  return this.valueOf__C__T(value$8)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.valueOf__Z__ = (function(value$9) {
  return this.valueOf__Z__T(value$9)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__Ljava_lang_StringBuilder__ = (function(builder) {
  return this.newString__Ljava_lang_StringBuilder__Lscala_scalajs_js_String(builder)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__Ljava_lang_StringBuffer__ = (function(buffer) {
  return this.newString__Ljava_lang_StringBuffer__Lscala_scalajs_js_String(buffer)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__T__ = (function(original) {
  return this.newString__T__Lscala_scalajs_js_String(original)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AI__I__I__ = (function(codePoints, offset, count) {
  return this.newString__AI__I__I__Lscala_scalajs_js_String(codePoints, offset, count)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AB__I__I__T__ = (function(bytes, offest, length, charsetName) {
  return this.newString__AB__I__I__T__Lscala_scalajs_js_String(bytes, offest, length, charsetName)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AB__T__ = (function(bytes$2, charsetName$2) {
  return this.newString__AB__T__Lscala_scalajs_js_String(bytes$2, charsetName$2)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AC__I__I__ = (function(value$10, offset$2, count$2) {
  return this.newString__AC__I__I__Lscala_scalajs_js_String(value$10, offset$2, count$2)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__AC__ = (function(value$11) {
  return this.newString__AC__Lscala_scalajs_js_String(value$11)
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.newString__ = (function() {
  return this.newString__Lscala_scalajs_js_String()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_runtime_RuntimeString$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_runtime_RuntimeString$.prototype = ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype;
ScalaJS.is.scala_scalajs_runtime_RuntimeString$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_runtime_RuntimeString$)))
});
ScalaJS.as.scala_scalajs_runtime_RuntimeString$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_runtime_RuntimeString$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.runtime.RuntimeString")
  }
});
ScalaJS.isArrayOf.scala_scalajs_runtime_RuntimeString$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_runtime_RuntimeString$)))
});
ScalaJS.asArrayOf.scala_scalajs_runtime_RuntimeString$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_runtime_RuntimeString$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.runtime.RuntimeString;", depth)
  }
});
ScalaJS.data.scala_scalajs_runtime_RuntimeString$ = new ScalaJS.ClassTypeData({
  scala_scalajs_runtime_RuntimeString$: 0
}, false, "scala.scalajs.runtime.RuntimeString$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_runtime_RuntimeString$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_runtime_RuntimeString$.prototype.$classData = ScalaJS.data.scala_scalajs_runtime_RuntimeString$;
ScalaJS.moduleInstances.scala_scalajs_runtime_RuntimeString = undefined;
ScalaJS.modules.scala_scalajs_runtime_RuntimeString = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_runtime_RuntimeString)) {
    ScalaJS.moduleInstances.scala_scalajs_runtime_RuntimeString = new ScalaJS.c.scala_scalajs_runtime_RuntimeString$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_runtime_RuntimeString
});
//@ sourceMappingURL=RuntimeString$.js.map
