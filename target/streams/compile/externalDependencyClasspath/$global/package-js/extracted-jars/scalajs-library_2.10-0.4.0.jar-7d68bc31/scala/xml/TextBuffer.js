/** @constructor */
ScalaJS.c.scala_xml_TextBuffer = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.sb$1 = null
});
ScalaJS.c.scala_xml_TextBuffer.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_TextBuffer.prototype.constructor = ScalaJS.c.scala_xml_TextBuffer;
ScalaJS.c.scala_xml_TextBuffer.prototype.sb__Lscala_collection_mutable_StringBuilder = (function() {
  return this.sb$1
});
ScalaJS.c.scala_xml_TextBuffer.prototype.append__Lscala_collection_Seq__Lscala_xml_TextBuffer = (function(cs) {
  cs.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(c) {
      c = ScalaJS.uC(c);
      if ((!ScalaJS.modules.scala_xml_Utility().isSpace__C__Z(c))) {
        return arg$outer.sb__Lscala_collection_mutable_StringBuilder().append__C__Lscala_collection_mutable_StringBuilder(c)
      } else {
        if ((arg$outer.sb__Lscala_collection_mutable_StringBuilder().isEmpty__Z() || (!ScalaJS.modules.scala_xml_Utility().isSpace__C__Z(ScalaJS.uC(arg$outer.sb__Lscala_collection_mutable_StringBuilder().last__O()))))) {
          return arg$outer.sb__Lscala_collection_mutable_StringBuilder().append__C__Lscala_collection_mutable_StringBuilder(32)
        } else {
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        }
      }
    })
  })(this)));
  return this
});
ScalaJS.c.scala_xml_TextBuffer.prototype.toText__Lscala_collection_Seq = (function() {
  var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(this.sb__Lscala_collection_mutable_StringBuilder().toString__T());
  if (ScalaJS.anyRefEqEq("", x1)) {
    return ScalaJS.modules.scala_collection_immutable_Nil()
  };
  return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_Text.getArrayOf(), [ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(x1)]), 1))))
});
ScalaJS.c.scala_xml_TextBuffer.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.sb$1 = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  return this
});
ScalaJS.c.scala_xml_TextBuffer.prototype.toText__ = (function() {
  return this.toText__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_TextBuffer.prototype.append__Lscala_collection_Seq__ = (function(cs) {
  return this.append__Lscala_collection_Seq__Lscala_xml_TextBuffer(cs)
});
ScalaJS.c.scala_xml_TextBuffer.prototype.sb__ = (function() {
  return this.sb__Lscala_collection_mutable_StringBuilder()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_TextBuffer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_TextBuffer.prototype = ScalaJS.c.scala_xml_TextBuffer.prototype;
ScalaJS.is.scala_xml_TextBuffer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_TextBuffer)))
});
ScalaJS.as.scala_xml_TextBuffer = (function(obj) {
  if ((ScalaJS.is.scala_xml_TextBuffer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.TextBuffer")
  }
});
ScalaJS.isArrayOf.scala_xml_TextBuffer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_TextBuffer)))
});
ScalaJS.asArrayOf.scala_xml_TextBuffer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_TextBuffer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.TextBuffer;", depth)
  }
});
ScalaJS.data.scala_xml_TextBuffer = new ScalaJS.ClassTypeData({
  scala_xml_TextBuffer: 0
}, false, "scala.xml.TextBuffer", ScalaJS.data.java_lang_Object, {
  scala_xml_TextBuffer: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_TextBuffer.prototype.$classData = ScalaJS.data.scala_xml_TextBuffer;
//@ sourceMappingURL=TextBuffer.js.map
