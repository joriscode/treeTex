/** @constructor */
ScalaJS.c.scala_xml_dtd_DEFAULT = (function() {
  ScalaJS.c.scala_xml_dtd_DefaultDecl.call(this);
  this.fixed$2 = false;
  this.attValue$2 = null
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype = new ScalaJS.inheritable.scala_xml_dtd_DefaultDecl();
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.constructor = ScalaJS.c.scala_xml_dtd_DEFAULT;
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.fixed__Z = (function() {
  return this.fixed$2
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.attValue__T = (function() {
  return this.attValue$2
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(sb) {
      arg$outer.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  if (this.fixed__Z()) {
    sb.append__T__Lscala_collection_mutable_StringBuilder("#FIXED ")
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return ScalaJS.modules.scala_xml_Utility().appendEscapedQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this.attValue__T(), sb)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.copy__Z__T__Lscala_xml_dtd_DEFAULT = (function(fixed, attValue) {
  return new ScalaJS.c.scala_xml_dtd_DEFAULT().init___Z__T(fixed, attValue)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.copy$default$1__Z = (function() {
  return this.fixed__Z()
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.copy$default$2__T = (function() {
  return this.attValue__T()
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productPrefix__T = (function() {
  return "DEFAULT"
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bZ(this.fixed__Z());
        break
      };
    case 1:
      {
        return this.attValue__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_DEFAULT(x$1)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.hashCode__I = (function() {
  var acc = -889275714;
  var jsx$3 = ScalaJS.modules.scala_runtime_Statics();
  var jsx$2 = acc;
  if (this.fixed__Z()) {
    var jsx$1 = 1231
  } else {
    var jsx$1 = 1237
  };
  acc = jsx$3.mix__I__I__I(jsx$2, jsx$1);
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.attValue__T()));
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 2)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_DEFAULT(x1)) {
        var jsx$4 = true;
        break matchEnd4
      };
      var jsx$4 = false;
      break matchEnd4
    };
    if (jsx$4) {
      var DEFAULT$1 = ScalaJS.as.scala_xml_dtd_DEFAULT(x$1);
      return (((this.fixed__Z() === DEFAULT$1.fixed__Z()) && ScalaJS.anyRefEqEq(this.attValue__T(), DEFAULT$1.attValue__T())) && DEFAULT$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.init___Z__T = (function(fixed, attValue) {
  this.fixed$2 = fixed;
  this.attValue$2 = attValue;
  ScalaJS.c.scala_xml_dtd_DefaultDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.copy__Z__T__ = (function(fixed, attValue) {
  return this.copy__Z__T__Lscala_xml_dtd_DEFAULT(fixed, attValue)
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.attValue__ = (function() {
  return this.attValue__T()
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.fixed__ = (function() {
  return ScalaJS.bZ(this.fixed__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_DEFAULT = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_DEFAULT.prototype = ScalaJS.c.scala_xml_dtd_DEFAULT.prototype;
ScalaJS.is.scala_xml_dtd_DEFAULT = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_DEFAULT)))
});
ScalaJS.as.scala_xml_dtd_DEFAULT = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_DEFAULT(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.DEFAULT")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_DEFAULT = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_DEFAULT)))
});
ScalaJS.asArrayOf.scala_xml_dtd_DEFAULT = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_DEFAULT(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.DEFAULT;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_DEFAULT = new ScalaJS.ClassTypeData({
  scala_xml_dtd_DEFAULT: 0
}, false, "scala.xml.dtd.DEFAULT", ScalaJS.data.scala_xml_dtd_DefaultDecl, {
  scala_xml_dtd_DEFAULT: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_DefaultDecl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_DEFAULT.prototype.$classData = ScalaJS.data.scala_xml_dtd_DEFAULT;
//@ sourceMappingURL=DEFAULT.js.map
