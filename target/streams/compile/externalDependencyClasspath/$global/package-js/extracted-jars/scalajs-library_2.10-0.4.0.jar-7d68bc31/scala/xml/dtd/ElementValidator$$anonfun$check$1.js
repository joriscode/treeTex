/** @constructor */
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.ok$1$f = null
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.constructor = ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1;
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.apply__Lscala_xml_MetaData__V = (function(attr) {
  var x1 = this.find$1__p2__T__Lscala_Option(attr.key__T());
  matchEnd11: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      this.$$outer$2.scala$xml$dtd$ElementValidator$$exc$und$eq__Lscala_collection_immutable_List__V(this.$$outer$2.scala$xml$dtd$ElementValidator$$exc__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(ScalaJS.modules.scala_xml_dtd_MakeValidationException().fromUndefinedAttribute__T__Lscala_xml_dtd_ValidationException(attr.key__T())));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd11
    };
    if (ScalaJS.is.scala_Some(x1)) {
      var x3 = ScalaJS.as.scala_Some(x1);
      var p2 = ScalaJS.as.scala_xml_dtd_AttrDecl(x3.x__O());
      if ((p2 !== null)) {
        var p5 = p2.$default__Lscala_xml_dtd_DefaultDecl();
        if (ScalaJS.is.scala_xml_dtd_DEFAULT(p5)) {
          var x7 = ScalaJS.as.scala_xml_dtd_DEFAULT(p5);
          var p6 = x7.fixed__Z();
          var fixedValue = x7.attValue__T();
          if ((true === p6)) {
            if ((!ScalaJS.anyRefEqEq(this.attrStr$1__p2__Lscala_xml_MetaData__T(attr), fixedValue))) {
              this.$$outer$2.scala$xml$dtd$ElementValidator$$exc$und$eq__Lscala_collection_immutable_List__V(this.$$outer$2.scala$xml$dtd$ElementValidator$$exc__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(ScalaJS.modules.scala_xml_dtd_MakeValidationException().fromFixedAttribute__T__T__T__Lscala_xml_dtd_ValidationException(attr.key__T(), fixedValue, this.attrStr$1__p2__Lscala_xml_MetaData__T(attr))));
              ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
              break matchEnd11
            }
          }
        }
      }
    };
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd11
  }
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.apply__O__O = (function(v1) {
  this.apply__Lscala_xml_MetaData__V(ScalaJS.as.scala_xml_MetaData(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.attrStr$1__p2__Lscala_xml_MetaData__T = (function(attr$1) {
  return attr$1.value__Lscala_collection_Seq().toString__T()
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.find$1__p2__T__Lscala_Option = (function(Key) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    ScalaJS.as.scala_collection_LinearSeqOptimized(this.$$outer$2.adecls__Lscala_collection_immutable_List().zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).find__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, Key$1, nonLocalReturnKey1$1) {
      return (function(x0$2) {
        var x1 = x0$2;
        matchEnd7: {
          if ((x1 !== null)) {
            var a = ScalaJS.as.scala_xml_dtd_AttrDecl(x1.$$und1__O());
            var j = x1.$$und2$mcI$sp__I();
            if ((a !== null)) {
              var p2 = a.name__T();
              if (ScalaJS.anyRefEqEq(Key$1, p2)) {
                ScalaJS.as.scala_collection_mutable_BitSet(arg$outer.ok$1$f.elem$1).$$plus$eq__I__Lscala_collection_mutable_BitSet(j);
                throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey1$1, new ScalaJS.c.scala_Some().init___O(a))
              }
            }
          };
          var jsx$1 = false;
          break matchEnd7
        };
        return ScalaJS.bZ(jsx$1)
      })
    })(this, Key, nonLocalReturnKey1)));
    return ScalaJS.modules.scala_None()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        return ScalaJS.as.scala_Option(ex.value__O())
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.init___Lscala_xml_dtd_ElementValidator__Lscala_runtime_ObjectRef = (function($$outer, ok$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.ok$1$f = ok$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.apply__Lscala_xml_MetaData__ = (function(attr) {
  return ScalaJS.bV(this.apply__Lscala_xml_MetaData__V(attr))
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ElementValidator$$anonfun$check$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype = ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype;
ScalaJS.is.scala_xml_dtd_ElementValidator$$anonfun$check$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ElementValidator$$anonfun$check$1)))
});
ScalaJS.as.scala_xml_dtd_ElementValidator$$anonfun$check$1 = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ElementValidator$$anonfun$check$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ElementValidator$$anonfun$check$1")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ElementValidator$$anonfun$check$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ElementValidator$$anonfun$check$1)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ElementValidator$$anonfun$check$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ElementValidator$$anonfun$check$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ElementValidator$$anonfun$check$1;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ElementValidator$$anonfun$check$1 = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ElementValidator$$anonfun$check$1: 0
}, false, "scala.xml.dtd.ElementValidator$$anonfun$check$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_dtd_ElementValidator$$anonfun$check$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ElementValidator$$anonfun$check$1.prototype.$classData = ScalaJS.data.scala_xml_dtd_ElementValidator$$anonfun$check$1;
//@ sourceMappingURL=ElementValidator$$anonfun$check$1.js.map
