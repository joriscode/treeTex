/** @constructor */
ScalaJS.c.scala_util_Marshal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Marshal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Marshal$.prototype.constructor = ScalaJS.c.scala_util_Marshal$;
ScalaJS.c.scala_util_Marshal$.prototype.dump__O__Lscala_reflect_ClassTag__AB = (function(o, t) {
  var ba = new ScalaJS.c.java_io_ByteArrayOutputStream().init___I(512);
  var out = new ScalaJS.c.java_io_ObjectOutputStream().init___Ljava_io_OutputStream(ba);
  out.writeObject__O__V(t);
  out.writeObject__O__V(o);
  out.close__V();
  return ba.toByteArray__AB()
});
ScalaJS.c.scala_util_Marshal$.prototype.load__AB__Lscala_reflect_ClassTag__O = (function(buffer, expected) {
  var in$2 = new ScalaJS.c.java_io_ObjectInputStream().init___Ljava_io_InputStream(new ScalaJS.c.java_io_ByteArrayInputStream().init___AB(buffer));
  var found = ScalaJS.as.scala_reflect_ClassTag(in$2.readObject__O());
  try {
    found.runtimeClass__Ljava_lang_Class().asSubclass__Ljava_lang_Class__Ljava_lang_Class(expected.runtimeClass__Ljava_lang_Class());
    return in$2.readObject__O()
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      in$2.close__V();
      throw new ScalaJS.c.java_lang_ClassCastException().init___T(((("type mismatch;\n found   : " + found) + "\n required: ") + expected))
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_util_Marshal$.prototype.load__AB__Lscala_reflect_ClassTag__ = (function(buffer, expected) {
  return this.load__AB__Lscala_reflect_ClassTag__O(buffer, expected)
});
ScalaJS.c.scala_util_Marshal$.prototype.dump__O__Lscala_reflect_ClassTag__ = (function(o, t) {
  return this.dump__O__Lscala_reflect_ClassTag__AB(o, t)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Marshal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Marshal$.prototype = ScalaJS.c.scala_util_Marshal$.prototype;
ScalaJS.is.scala_util_Marshal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Marshal$)))
});
ScalaJS.as.scala_util_Marshal$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Marshal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Marshal")
  }
});
ScalaJS.isArrayOf.scala_util_Marshal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Marshal$)))
});
ScalaJS.asArrayOf.scala_util_Marshal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Marshal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Marshal;", depth)
  }
});
ScalaJS.data.scala_util_Marshal$ = new ScalaJS.ClassTypeData({
  scala_util_Marshal$: 0
}, false, "scala.util.Marshal$", ScalaJS.data.java_lang_Object, {
  scala_util_Marshal$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Marshal$.prototype.$classData = ScalaJS.data.scala_util_Marshal$;
ScalaJS.moduleInstances.scala_util_Marshal = undefined;
ScalaJS.modules.scala_util_Marshal = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Marshal)) {
    ScalaJS.moduleInstances.scala_util_Marshal = new ScalaJS.c.scala_util_Marshal$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Marshal
});
//@ sourceMappingURL=Marshal$.js.map
