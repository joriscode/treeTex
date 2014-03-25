/** @constructor */
ScalaJS.c.scala_xml_pull_EvText = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.text$1 = null
});
ScalaJS.c.scala_xml_pull_EvText.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_pull_EvText.prototype.constructor = ScalaJS.c.scala_xml_pull_EvText;
ScalaJS.c.scala_xml_pull_EvText.prototype.text__T = (function() {
  return this.text$1
});
ScalaJS.c.scala_xml_pull_EvText.prototype.copy__T__Lscala_xml_pull_EvText = (function(text) {
  return new ScalaJS.c.scala_xml_pull_EvText().init___T(text)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.copy$default$1__T = (function() {
  return this.text__T()
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productPrefix__T = (function() {
  return "EvText"
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.text__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_pull_EvText(x$1)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_pull_EvText(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var EvText$1 = ScalaJS.as.scala_xml_pull_EvText(x$1);
      return (ScalaJS.anyRefEqEq(this.text__T(), EvText$1.text__T()) && EvText$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_pull_EvText.prototype.init___T = (function(text) {
  this.text$1 = text;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_pull_EvText.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_pull_EvText.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_pull_EvText.prototype.copy__T__ = (function(text) {
  return this.copy__T__Lscala_xml_pull_EvText(text)
});
ScalaJS.c.scala_xml_pull_EvText.prototype.text__ = (function() {
  return this.text__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvText = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvText.prototype = ScalaJS.c.scala_xml_pull_EvText.prototype;
ScalaJS.is.scala_xml_pull_EvText = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvText)))
});
ScalaJS.as.scala_xml_pull_EvText = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvText(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvText")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvText = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvText)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvText = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvText(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvText;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvText = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvText: 0
}, false, "scala.xml.pull.EvText", ScalaJS.data.java_lang_Object, {
  scala_xml_pull_EvText: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_pull_XMLEvent: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvText.prototype.$classData = ScalaJS.data.scala_xml_pull_EvText;
//@ sourceMappingURL=EvText.js.map
