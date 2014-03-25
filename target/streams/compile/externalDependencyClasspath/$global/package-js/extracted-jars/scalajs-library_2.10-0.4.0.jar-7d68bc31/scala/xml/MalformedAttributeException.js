/** @constructor */
ScalaJS.c.scala_xml_MalformedAttributeException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.msg$4 = null
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.constructor = ScalaJS.c.scala_xml_MalformedAttributeException;
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.msg__T = (function() {
  return this.msg$4
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.copy__T__Lscala_xml_MalformedAttributeException = (function(msg) {
  return new ScalaJS.c.scala_xml_MalformedAttributeException().init___T(msg)
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.copy$default$1__T = (function() {
  return this.msg__T()
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productPrefix__T = (function() {
  return "MalformedAttributeException"
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.msg__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_MalformedAttributeException(x$1)
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_MalformedAttributeException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var MalformedAttributeException$1 = ScalaJS.as.scala_xml_MalformedAttributeException(x$1);
      return (ScalaJS.anyRefEqEq(this.msg__T(), MalformedAttributeException$1.msg__T()) && MalformedAttributeException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.init___T = (function(msg) {
  this.msg$4 = msg;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T.call(this, msg);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.copy__T__ = (function(msg) {
  return this.copy__T__Lscala_xml_MalformedAttributeException(msg)
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.msg__ = (function() {
  return this.msg__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_MalformedAttributeException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_MalformedAttributeException.prototype = ScalaJS.c.scala_xml_MalformedAttributeException.prototype;
ScalaJS.is.scala_xml_MalformedAttributeException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_MalformedAttributeException)))
});
ScalaJS.as.scala_xml_MalformedAttributeException = (function(obj) {
  if ((ScalaJS.is.scala_xml_MalformedAttributeException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.MalformedAttributeException")
  }
});
ScalaJS.isArrayOf.scala_xml_MalformedAttributeException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_MalformedAttributeException)))
});
ScalaJS.asArrayOf.scala_xml_MalformedAttributeException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_MalformedAttributeException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.MalformedAttributeException;", depth)
  }
});
ScalaJS.data.scala_xml_MalformedAttributeException = new ScalaJS.ClassTypeData({
  scala_xml_MalformedAttributeException: 0
}, false, "scala.xml.MalformedAttributeException", ScalaJS.data.java_lang_RuntimeException, {
  scala_xml_MalformedAttributeException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_MalformedAttributeException.prototype.$classData = ScalaJS.data.scala_xml_MalformedAttributeException;
//@ sourceMappingURL=MalformedAttributeException.js.map
