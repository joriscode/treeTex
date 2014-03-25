/** @constructor */
ScalaJS.c.scala_xml_pull_EvElemEnd = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pre$1 = null;
  this.label$1 = null
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.constructor = ScalaJS.c.scala_xml_pull_EvElemEnd;
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.pre__T = (function() {
  return this.pre$1
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.label__T = (function() {
  return this.label$1
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.copy__T__T__Lscala_xml_pull_EvElemEnd = (function(pre, label) {
  return new ScalaJS.c.scala_xml_pull_EvElemEnd().init___T__T(pre, label)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.copy$default$1__T = (function() {
  return this.pre__T()
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.copy$default$2__T = (function() {
  return this.label__T()
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productPrefix__T = (function() {
  return "EvElemEnd"
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.pre__T();
        break
      };
    case 1:
      {
        return this.label__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_pull_EvElemEnd(x$1)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_pull_EvElemEnd(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var EvElemEnd$1 = ScalaJS.as.scala_xml_pull_EvElemEnd(x$1);
      return ((ScalaJS.anyRefEqEq(this.pre__T(), EvElemEnd$1.pre__T()) && ScalaJS.anyRefEqEq(this.label__T(), EvElemEnd$1.label__T())) && EvElemEnd$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.init___T__T = (function(pre, label) {
  this.pre$1 = pre;
  this.label$1 = label;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.copy__T__T__ = (function(pre, label) {
  return this.copy__T__T__Lscala_xml_pull_EvElemEnd(pre, label)
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.label__ = (function() {
  return this.label__T()
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.pre__ = (function() {
  return this.pre__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvElemEnd = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvElemEnd.prototype = ScalaJS.c.scala_xml_pull_EvElemEnd.prototype;
ScalaJS.is.scala_xml_pull_EvElemEnd = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvElemEnd)))
});
ScalaJS.as.scala_xml_pull_EvElemEnd = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvElemEnd(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvElemEnd")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvElemEnd = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvElemEnd)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvElemEnd = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvElemEnd(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvElemEnd;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvElemEnd = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvElemEnd: 0
}, false, "scala.xml.pull.EvElemEnd", ScalaJS.data.java_lang_Object, {
  scala_xml_pull_EvElemEnd: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_pull_XMLEvent: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvElemEnd.prototype.$classData = ScalaJS.data.scala_xml_pull_EvElemEnd;
//@ sourceMappingURL=EvElemEnd.js.map
